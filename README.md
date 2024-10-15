# SenangWebs Loading (SWL)

SenangWebs Loading is a lightweight, customizable JavaScript library that provides an elegant loading screen for your web applications. It offers various loading animations and options to enhance the user experience during page load.

## Features

- Easy to implement with minimal setup
- Multiple loader types: spinner, pulsing, and custom image
- Customizable colors for loaders and overlay
- Backdrop blur effect option
- Minimum duration setting to ensure visibility of the loading screen
- Automatically hides when the page is fully loaded
- No dependencies, pure vanilla JavaScript
- Compatible with Tailwind CSS

## Examples
[https://unpkg.com/senangwebs-loading@latest/examples/index.html](https://unpkg.com/senangwebs-loading@latest/examples/index.html)

## Installation

1. Download the `swl.js` file from this repository.
2. Include the file in your project directory.

## Usage

1. Include the SenangWebs Loading library in your HTML file, just before the closing `</body>` tag:

```html
<script src="path/to/swl.js"></script>
```

2. Add the appropriate data attributes to your `<body>` tag to customize the loader:

```html
<body data-swl-color="#007bff" data-swl-duration="2000">
```

## Configuration Options

You can customize the loader using the following data attributes on the `<body>` tag:

- `data-swl-pulse`: Use the pulsing loader
- `data-swl-image="URL"`: Use a custom image as the loader
- `data-swl-color="#RRGGBB"`: Set the color of the loader (for spinner and pulse types)
- `data-swl-duration="2000"`: Set the minimum duration (in milliseconds) to display the loader
- `data-swl-bg-color="#RRGGBB"`: Set the background color of the overlay
- `data-swl-bg-opacity="0.8"`: Set the opacity of the overlay background (0 to 1)
- `data-swl-bg-blur="5"`: Set the blur effect for the background (in pixels)
- `data-swl-z-index="9999"`: Set the z-index of the loader overlay

## Usage

### Default Spinner

```html
<body data-swl-color="#007bff" data-swl-duration="2000">
```

### Pulsing Loader with Custom Color

```html
<body data-swl-pulse data-swl-color="#ff0000" data-swl-duration="3000">
```

### Custom Image Loader

```html
<body data-swl-image="/path/to/your/loader.gif" data-swl-duration="2500">
```

### Customized Overlay

```html
<body 
  data-swl-color="#00ff00" 
  data-swl-duration="3000" 
  data-swl-bg-color="#000000"
  data-swl-bg-opacity="0.5"
  data-swl-bg-blur="5"
  data-swl-z-index="10000">
```

## Browser Compatibility

SenangWebs Loading is compatible with all modern browsers that support ECMAScript 5 and above.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any problems or have any questions, please open an issue in this repository.

---

Enjoy using SenangWebs Loading! We hope it enhances the loading experience of your web applications.