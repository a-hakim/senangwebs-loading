# SenangWebs Loading (SWL)

SenangWebs Loading (SWL) is a lightweight JavaScript library that provides customizable loading screens for web applications. With minimal setup, you can add elegant loading animations to your web pages, enhancing the user experience during page load.

## Features

- Easy to integrate with existing projects
- Multiple loader types: spinner, pulsing, and custom image
- Customizable colors for loaders and overlay
- Backdrop blur effect option
- Minimum duration setting to ensure visibility of the loading screen
- Priority loading - shows immediately before page content
- Smooth fade-out transitions
- Image preloading support
- No dependencies, pure vanilla JavaScript
- Compatible with Tailwind CSS
- Responsive and works on all modern browsers

## Examples
[https://unpkg.com/senangwebs-loading@latest/examples/index.html](https://unpkg.com/senangwebs-loading@latest/examples/index.html)

## Installation

### Using npm

```bash
npm install senangwebs-loading
```

### Using a CDN

Include SenangWebs Loading in your HTML file's head section with the defer attribute:

```html
<head>
  <script src="https://unpkg.com/senangwebs-loading@latest/dist/swl.js" defer></script>
</head>
```

## Usage

1. Include the SWL JavaScript file in your HTML's head section with defer:

```html
<!-- If installed via npm -->
<head>
  <script src="path/to/swl.js" defer></script>
</head>

<!-- Or if using unpkg -->
<head>
  <script src="https://unpkg.com/senangwebs-loading@latest/dist/swl.js" defer></script>
</head>
```

2. Add a div element with the `data-swl` attribute and any customization options:

```html
<div 
  data-swl 
  data-swl-type="spinner" 
  data-swl-color="#007bff" 
  data-swl-duration="2000"
  data-swl-bg-color="#ffffff"
  data-swl-bg-opacity="0.8"
  data-swl-bg-blur="5"
  data-swl-z-index="9999"
>
  <!-- Optional: Custom loader content -->
</div>
```

## Configuration Options

You can customize the loader using the following data attributes:

- `data-swl-type`: Set the loader type ("spinner", "pulse", or "image")
- `data-swl-color="#RRGGBB"`: Set the color of the loader (for spinner and pulse types)
- `data-swl-image="URL"`: Set the URL for a custom image loader (when type is "image")
- `data-swl-duration="2000"`: Set the minimum duration (in milliseconds) to display the loader
- `data-swl-bg-color="#RRGGBB"`: Set the background color of the overlay
- `data-swl-bg-opacity="0.8"`: Set the opacity of the overlay background (0 to 1)
- `data-swl-bg-blur="5"`: Set the blur effect for the background (in pixels)
- `data-swl-z-index="9999"`: Set the z-index of the loader overlay

## Performance Best Practices

1. Place the script in the head with defer attribute:
```html
<head>
  <script src="path/to/swl.js" defer></script>
</head>
```

2. Preload custom loader images:
```html
<head>
  <link rel="preload" href="path/to/loader.gif" as="image">
</head>
```

3. Use appropriate minimum duration:
- For small pages: 500-1000ms
- For medium pages: 1000-2000ms
- For content-heavy pages: 2000-3000ms

4. Optimize z-index values:
- Priority loader: 99999 (highest)
- Normal loaders: 9999 (high)
- Modal overlays: 1000-9998
- Regular content: < 1000

## Examples

### Default Spinner

```html
<div data-swl data-swl-color="#007bff" data-swl-duration="2000"></div>
```

### Pulsing Loader with Custom Color

```html
<div data-swl data-swl-type="pulse" data-swl-color="#ff0000" data-swl-duration="3000"></div>
```

### Custom Image Loader

```html
<div data-swl data-swl-type="image" data-swl-image="/path/to/your/loader.gif" data-swl-duration="2500"></div>
```

### Customized Overlay

```html
<div 
  data-swl
  data-swl-type="spinner"
  data-swl-color="#00ff00" 
  data-swl-duration="3000" 
  data-swl-bg-color="#000000"
  data-swl-bg-opacity="0.5"
  data-swl-bg-blur="5"
  data-swl-z-index="10000">
</div>
```

### Custom Loader Content

```html
<div data-swl data-swl-duration="2000">
  <div class="custom-loader">Loading...</div>
</div>
```

## Browser Support

SenangWebs Loading works on all modern browsers, including:

- Chrome
- Firefox
- Safari
- Edge
- Opera

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Inspired by various loading screen libraries in the web development community
- Thanks to all contributors who have helped to improve this library

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.