const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

class MockElement {
  constructor(tagName = 'div') {
    this.tagName = tagName;
    this.children = [];
    this.dataset = {};
    this.style = {};
    this.classList = {
      add: className => {
        this.className = `${this.className || ''} ${className}`.trim();
      },
    };
  }

  appendChild(child) {
    if (child.tagName === '#fragment') {
      child.children.forEach(fragmentChild => this.appendChild(fragmentChild));
      return child;
    }

    this.children.push(child);
    child.parentNode = this;
    return child;
  }

  insertBefore(child, reference) {
    const index = this.children.indexOf(reference);
    this.children.splice(index < 0 ? this.children.length : index, 0, child);
    child.parentNode = this;
    return child;
  }

  setAttribute(name, value) {
    this[name] = value;
  }

  remove() {
    this.removed = true;
  }

  get firstChild() {
    return this.children[0] || null;
  }
}

function runLibrary(zIndex) {
  const source = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'js', 'swl.js'),
    'utf8'
  );
  const loader = new MockElement();
  loader.dataset.swlZIndex = zIndex;

  const document = {
    readyState: 'complete',
    body: new MockElement('body'),
    head: new MockElement('head'),
    createDocumentFragment: () => new MockElement('#fragment'),
    createElement: tagName => new MockElement(tagName),
    createElementNS: (namespace, tagName) => new MockElement(tagName),
    querySelectorAll: selector => selector === '[data-swl]' ? [loader] : [],
  };

  vm.runInNewContext(source, {
    console,
    document,
    Option: function Option() {
      this.style = {};
    },
    setTimeout: callback => callback(),
    window: {
      addEventListener: () => {},
    },
  });

  return {
    overlay: document.body.children[0],
    stylesheet: document.head.children[0].textContent,
  };
}

test('data-swl-z-index overrides the default overlay stacking level', () => {
  const { overlay, stylesheet } = runLibrary('42');

  assert.equal(String(overlay.style.zIndex), '42');
  assert.doesNotMatch(
    stylesheet,
    /\.swl-overlay\s*\{[^}]*z-index\s*:[^;]+!important/is
  );
});

test('the overlay uses z-index 9999 by default', () => {
  const { overlay } = runLibrary(undefined);

  assert.equal(String(overlay.style.zIndex), '9999');
});
