---
name: senangwebs-loading
description: Customizable loading screens with spinner, pulse, image, backdrop blur, minimum duration, and fade-out options.
version: 1.2.5
package: senangwebs-loading
---

# SenangWebs Loading (SWL)

## Quick Reference

- **Purpose**: Full-page loading overlay that remains visible until page load
- **Entry**: `index.js`
- **Source**: `src/js/swl.js`
- **Dependencies**: none
- **Tests**: `test/swl.test.js`
- **Scripts**: `npm run build`, `npm run dev`, `npm test`

## Workflow

Start in `C:\wamp64\www\sw-libraries\senangwebs-loading`. Read `README.md`,
`package.json`, and touched source files. Match existing patterns and the `swl-`
CSS prefix. Rebuild `dist/swl.js` and `dist/swl.min.js` after source changes.

## HTML Data Attributes

| Attribute | Values | Description |
|---|---|---|
| `data-swl` | flag | Loading container |
| `data-swl-type` | `spinner`, `pulse`, `image` | Loader style; default `spinner` |
| `data-swl-color` | CSS color | Spinner/pulse color; default `#000000` |
| `data-swl-image` | URL | Custom loading image for `image` type |
| `data-swl-duration` | milliseconds | Minimum display duration; default `0` |
| `data-swl-bg-color` | CSS color | Overlay color; default `#ffffff` |
| `data-swl-bg-opacity` | 0.0-1.0 | Overlay opacity; default `0.8` |
| `data-swl-bg-blur` | pixels | Backdrop blur; default `0` |
| `data-swl-z-index` | number | Overlay z-index; default `9999` |

## JavaScript API

SWL initializes automatically from `[data-swl]` elements. It does not currently
expose public `init`, `show`, or `hide` methods.

## Focus Areas

- Loader types: SVG spinner, SVG pulse, custom `<img>`, or custom child content
- Minimum duration enforcement relative to initialization time
- Smooth fade-out after the window `load` event
- Custom image preloading and error handling
- Backdrop blur, color, opacity, and z-index stacking
- Body scroll locking and restoration
- Page-already-loaded and timing edge cases

## Implementation Guidance

- Preserve backward compatibility for public attributes and CSS classes
- Keep configurable inline styles, including `data-swl-z-index`, able to override defaults
- Keep the library dependency-free at runtime
- Handle the `load` event having fired before initialization
- Add focused regression tests for behavior changes

## Validation

```bash
npm test
npm run build
```
