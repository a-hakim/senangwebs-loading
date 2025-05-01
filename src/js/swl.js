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
    // Adjusted stroke-dasharray for a potentially more visible start
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
    // Add basic error handling for images
    img.onerror = () => { 
        console.error(`SWL Error: Could not load image at ${url}`);
        img.remove(); // Remove broken image placeholder
    };
    return img;
  }
  
  function removeOverlayLogic(overlay, startTime, minDuration) {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minDuration - elapsedTime);
  
    setTimeout(function() {
      overlay.remove(); // Original immediate removal
    }, remainingTime);
  }
  
  // --- Main Logic ---
  
  // Create shared style element
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
      /* z-index is set dynamically */
    }
    .swl-backdrop {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      /* background-color and backdrop-filter set dynamically */
    }
    .swl-content {
      position: relative !important;
      z-index: 1 !important; /* Content above backdrop */
    }
    /* Define base dimensions for loaders */
    .swl-spinner, .swl-pulse, .swl-image {
      width: 50px !important;
      height: 50px !important;
      display: block; /* Ensure SVGs/Images behave predictably */
      margin: auto; /* Center if needed */
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
  // Prepend to head to ensure styles are available early
  document.head.prepend(style);
  
  // Find all SWL elements
  const swlElements = document.querySelectorAll('[data-swl]');
  
  swlElements.forEach(swlElement => {
    const startTime = Date.now();
  
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'swl-overlay';
  
    // Create backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'swl-backdrop';
  
    // Create content container
    const content = document.createElement('div');
    content.className = 'swl-content';
  
    overlay.appendChild(backdrop);
    overlay.appendChild(content);
  
    // Move the SWL element's children to the content container
    // Use DocumentFragment for potentially better performance with many children
    const fragment = document.createDocumentFragment();
    while (swlElement.firstChild) {
        fragment.appendChild(swlElement.firstChild);
    }
    content.appendChild(fragment);
  
    // Append overlay to body
    document.body.appendChild(overlay);
  
    // --- Configuration ---
    const loaderType = swlElement.dataset.swlType || 'spinner';
    const color = swlElement.dataset.swlColor || '#000000';
    const minDuration = parseInt(swlElement.dataset.swlDuration, 10) || 0; // Always specify radix
    const bgColor = swlElement.dataset.swlBgColor || 'white';
    const bgOpacity = parseFloat(swlElement.dataset.swlBgOpacity) || 0.8;
    const bgBlur = parseInt(swlElement.dataset.swlBgBlur, 10) || 0; // Always specify radix
    const zIndex = parseInt(swlElement.dataset.swlZIndex, 10) || 9999; // Always specify radix
  
    // --- Apply Styles ---
    overlay.style.zIndex = zIndex;
    backdrop.style.backgroundColor = bgColor.startsWith('#') 
        ? hexToRgba(bgColor, bgOpacity) 
        : `rgba(${bgColor}, ${bgOpacity})`; // Assumes 'r,g,b' format if not hex
  
    if (bgBlur > 0) {
      backdrop.style.backdropFilter = `blur(${bgBlur}px)`;
      backdrop.style.webkitBackdropFilter = `blur(${bgBlur}px)`; // For Safari
    }
  
    // --- Create Loader (if content is empty) ---
    if (content.children.length === 0) {
      let loaderElement; // Use different name to avoid conflict
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
              loaderElement = createSpinner(color); // Fallback
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
  
    // --- Removal Logic ---
    const handleRemove = () => removeOverlayLogic(overlay, startTime, minDuration);
  
    if (document.readyState === 'complete') {
      handleRemove();
    } else {
      // Add listener specific to this overlay instance
      window.addEventListener('load', handleRemove, { once: true }); // Use { once: true } for auto-cleanup
    }
  });
})();