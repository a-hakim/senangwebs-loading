// SenangWebs Loading Library

(function() {
  // --- Helper Functions (Defined Once) ---
  
  function hexToRgba(hex, opacity) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`
      : `rgba(255, 255, 255, ${opacity})`; // Default fallback
  }
  
  function createSpinner(color) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'swl-spinner');
    svg.setAttribute('viewBox', '0 0 50 50');
    svg.style.animation = 'swl-spin 1s linear infinite';
  
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '25');
    circle.setAttribute('cy', '25');
    circle.setAttribute('r', '20');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', color);
    circle.setAttribute('stroke-width', '5');
    circle.setAttribute('stroke-linecap', 'round');
    circle.setAttribute('stroke-dasharray', '80, 200');
    circle.setAttribute('stroke-dashoffset', '0');
  
    svg.appendChild(circle);
    return svg;
  }
  
  function createPulse(color) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'swl-pulse');
    svg.setAttribute('viewBox', '0 0 50 50');
    svg.style.animation = 'swl-pulse 1s ease-in-out infinite';
  
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '25');
    circle.setAttribute('cy', '25');
    circle.setAttribute('r', '20');
    circle.setAttribute('fill', color);
  
    svg.appendChild(circle);
    return svg;
  }
  
  function createImage(url) {
    const img = document.createElement('img');
    img.src = url;
    img.className = 'swl-image';
    img.onerror = () => { 
        console.error(`SWL Error: Could not load image at ${url}`);
        img.remove();
    };
    return img;
  }

  function preloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  }
  
  function removeOverlayLogic(overlay, startTime, minDuration) {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minDuration - elapsedTime);
  
    setTimeout(function() {
      overlay.classList.add('swl-fade-out');
      setTimeout(() => overlay.remove(), 300);
    }, remainingTime);
  }
  
  // --- Main Logic ---
  const style = document.createElement('style');
  style.textContent = `
    .swl-overlay {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      opacity: 1;
      transition: opacity 0.3s ease-out;
      z-index: 99999 !important;
      background: #ffffff !important;
    }
    .swl-fade-out {
      opacity: 0;
    }
    .swl-backdrop {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
    }
    .swl-content {
      position: relative !important;
      z-index: 1 !important;
    }
    .swl-spinner, .swl-pulse, .swl-image {
      width: 50px !important;
      height: 50px !important;
      display: block;
      margin: auto;
    }
    @keyframes swl-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes swl-pulse {
      0% { transform: scale(0.8); opacity: 0.5; }
      50% { transform: scale(1); opacity: 1; }
      100% { transform: scale(0.8); opacity: 0.5; }
    }
  `;
  document.head.appendChild(style);

  // Initialize as soon as DOM is ready
  function initialize() {
    const swlElements = document.querySelectorAll('[data-swl]');
    
    swlElements.forEach(async swlElement => {
      const startTime = Date.now();
      
      // Preload image if specified
      if (swlElement.dataset.swlType === 'image' && swlElement.dataset.swlImage) {
        try {
          await preloadImage(swlElement.dataset.swlImage);
        } catch (error) {
          console.warn('SWL Warning: Failed to preload image', error);
        }
      }

      const overlay = document.createElement('div');
      overlay.className = 'swl-overlay';
      
      const backdrop = document.createElement('div');
      backdrop.className = 'swl-backdrop';
      
      const content = document.createElement('div');
      content.className = 'swl-content';
      
      overlay.appendChild(backdrop);
      overlay.appendChild(content);
      
      const fragment = document.createDocumentFragment();
      while (swlElement.firstChild) {
          fragment.appendChild(swlElement.firstChild);
      }
      content.appendChild(fragment);
      
      document.body.appendChild(overlay);
      
      const loaderType = swlElement.dataset.swlType || 'spinner';
      const color = swlElement.dataset.swlColor || '#000000';
      const minDuration = parseInt(swlElement.dataset.swlDuration, 10) || 0;
      const bgColor = swlElement.dataset.swlBgColor || 'white';
      const bgOpacity = parseFloat(swlElement.dataset.swlBgOpacity) || 0.8;
      const bgBlur = parseInt(swlElement.dataset.swlBgBlur, 10) || 0;
      const zIndex = parseInt(swlElement.dataset.swlZIndex, 10) || 9999;
      
      overlay.style.zIndex = zIndex;
      backdrop.style.backgroundColor = bgColor.startsWith('#') 
          ? hexToRgba(bgColor, bgOpacity) 
          : `rgba(${bgColor}, ${bgOpacity})`;
      
      if (bgBlur > 0) {
        backdrop.style.backdropFilter = `blur(${bgBlur}px)`;
        backdrop.style.webkitBackdropFilter = `blur(${bgBlur}px)`;
      }
      
      if (content.children.length === 0) {
        let loaderElement;
        switch (loaderType) {
          case 'spinner':
            loaderElement = createSpinner(color);
            break;
          case 'pulse':
            loaderElement = createPulse(color);
            break;
          case 'image':
            const imageUrl = swlElement.dataset.swlImage;
            if (imageUrl) {
                loaderElement = createImage(imageUrl);
            } else {
                console.warn('SWL Warning: data-swl-type="image" requires data-swl-image attribute.');
                loaderElement = createSpinner(color);
            }
            break;
          default:
            console.warn(`SWL Warning: Unknown data-swl-type "${loaderType}". Defaulting to spinner.`);
            loaderElement = createSpinner(color);
        }
        if (loaderElement) {
            content.appendChild(loaderElement);
        }
      }
      
      const handleRemove = () => {
        removeOverlayLogic(overlay, startTime, minDuration);
      };
      
      if (document.readyState === 'complete') {
        handleRemove();
      } else {
        window.addEventListener('load', handleRemove, { once: true });
      }
    });
  }

  // Initialize as early as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();