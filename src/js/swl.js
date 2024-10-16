// SenangWebs Loading Library

(function() {
  // Create style element
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
      z-index: 9999 !important;
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

  // Find all SWL elements
  const swlElements = document.querySelectorAll('[data-swl]');

  swlElements.forEach(swlElement => {
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
    while (swlElement.firstChild) {
      content.appendChild(swlElement.firstChild);
    }

    // Append overlay to body instead of swlElement
    document.body.appendChild(overlay);

    // Detect loader type, color, duration, and overlay settings
    const loaderType = swlElement.dataset.swlType || 'spinner';
    const color = swlElement.dataset.swlColor || '#000000';
    const minDuration = parseInt(swlElement.dataset.swlDuration) || 0;
    
    // Overlay customization options
    const bgColor = swlElement.dataset.swlBgColor || 'white';
    const bgOpacity = parseFloat(swlElement.dataset.swlBgOpacity) || 0.8;
    const bgBlur = parseInt(swlElement.dataset.swlBgBlur) || 0;
    const zIndex = parseInt(swlElement.dataset.swlZIndex) || 9999;

    // Apply overlay styles
    overlay.style.zIndex = zIndex;
    
    // Convert color to rgba
    function hexToRgba(hex, opacity) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ?
        `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`
        : `rgba(255, 255, 255, ${opacity})`;
    }

    // Apply background color with opacity
    backdrop.style.backgroundColor = bgColor.startsWith('#') ? hexToRgba(bgColor, bgOpacity) : `rgba(${bgColor}, ${bgOpacity})`;
    
    if (bgBlur > 0) {
      backdrop.style.backdropFilter = `blur(${bgBlur}px)`;
      backdrop.style.webkitBackdropFilter = `blur(${bgBlur}px)`; // For Safari
    }

    // Create loader based on type if content is empty
    if (content.children.length === 0) {
      let loader;
      switch (loaderType) {
        case 'spinner':
          loader = createSpinner(color);
          break;
        case 'pulse':
          loader = createPulse(color);
          break;
        case 'image':
          loader = createImage(swlElement.dataset.swlImage);
          break;
        default:
          loader = createSpinner(color);
      }
      content.appendChild(loader);
    }

    // Helper functions to create loaders
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
      circle.setAttribute('stroke-dasharray', '1, 200');
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
      return img;
    }

    // Remove overlay when page is loaded and minimum duration has passed
    const startTime = Date.now();

    function removeOverlay() {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDuration - elapsedTime);
      
      setTimeout(function() {
        overlay.remove();
      }, remainingTime);
    }

    if (document.readyState === 'complete') {
      removeOverlay();
    } else {
      window.addEventListener('load', removeOverlay);
    }
  });
})();