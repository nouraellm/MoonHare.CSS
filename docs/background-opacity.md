
# Background Opacity

Utilities for controlling the opacity of an element's background color.

## Default class reference

Class|Properties
-|-
`bg-opacity-0`|`--mh-bg-opacity: 0`
`bg-opacity-50`|`--mh-bg-opacity: 0.5`
`bg-opacity-100`|`--mh-bg-opacity: 1`

## Usage

Control the opacity of an element's background color using the  `bg-opacity-{amount}`  utilities.

```html
<div class="bg-indigo-600 bg-opacity-100 ..."></div>
<div class="bg-indigo-600 bg-opacity-75 ..."></div>
<div class="bg-indigo-600 bg-opacity-50 ..."></div>
<div class="bg-indigo-600 bg-opacity-25 ..."></div>
<div class="bg-indigo-600 bg-opacity-0 ..."></div>
```

## Responsive

To control an element's background color opacity at a specific breakpoint, add a  `{screen}:`  prefix to any existing background color opacity utility. For example, use  `md:bg-opacity-50`  to apply the  `bg-opacity-50`  utility at only medium screen sizes and above.

```html
<div class="bg-blue-500 bg-opacity-75 md:bg-opacity-50">
  <!-- ... -->
</div>
```

For more information about MoonHare's responsive design features, check out the  [Responsive Design](/docs/responsive-design)  documentation.

## Customizing

To customize the opacity values for all opacity-related utilities at once, use the  `opacity`  section of your  theme configuration:

```diff-js
  MOONHARECONFIG {
    theme: {
      extend: {
        opacity: {
+         '15%': '0.15',
+         '35%': '0.35',
+         '65%': '0.65',
        }
      }
    }
  }
```

If you want to customize only the background opacity utilities, use the  `backgroundOpacity`  section:

```diff-js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        backgroundOpacity: {
+         '10%': '0.1',
+         '20%': '0.2',
+         '95%': '0.95',
        }
      }
    }
  }
```

Learn more about customizing the default theme in the  [theme customization documentation](/docs/theme#customizing-the-default-theme).

## Browser Support
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-variables.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-variables.png">
<img src="https://caniuse.bitsofco.de/image/css-variables.jpg" alt="Data on support for the css-variables feature across the major browsers from caniuse.com">
</picture>

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples
