# Background Color

Utilities for controlling an element's background color.

## Default class reference
class|properties
-|-
`bg-red-50`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`
`bg-red`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`
`bg-#f00`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`
`bg-#ff0000`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`
`bg-#ff0000`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`
`bg-rgb(255,0,0)`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`
`bg-rgba(255,0,0,0.5)`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 0.5))`
`bg-hsl(0,100%,50%)`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`
`bg-hsla(0,100%,50%,0.5)`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 0.5))`
`bg-hwb(0,0%,0%)`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`
`bg-cmyk(0%,100%,100%,0%)`|`background-color:rgba(255, 0, 0, var(--mh-bg-opacity, 1))`


##   Usage

Control the background color of an element using the  `bg-{color}`  utilities.

```html
<button class="bg-green-500 ...">Button</button>
```

### Changing opacity

Control the opacity of an element's background color using the  `bg-opacity-{amount}`  utilities.

```html
<div class="bg-purple-600 bg-opacity-100 ..."></div>
<div class="bg-purple-600 bg-opacity-75 ..."></div>
<div class="bg-purple-600 bg-opacity-50 ..."></div>
<div class="bg-purple-600 bg-opacity-25 ..."></div>
<div class="bg-purple-600 bg-opacity-0 ..."></div>
```

Learn more in the  [background opacity documentation](/docs/background-opacity).

## Responsive

To control the background color of an element at a specific breakpoint, add a  `{screen}:`  prefix to any existing background color utility. For example, use  `md:bg-green-500`  to apply the  `bg-green-500`  utility at only medium screen sizes and above.

```html
<button class="bg-blue-500 md:bg-green-500 ...">Button</button>
```

For more information about MoonHare's responsive design features, check out the  [Responsive Design](/docs/responsive-design)  documentation.

## Hover

To control the background color of an element on hover, add the  `hover:`  prefix to any existing background color utility. For example, use  `hover:bg-red-700`  to apply the  `bg-red-700`  utility on hover.


```html
<button class="bg-red-500 hover:bg-red-700 ...">Button</button>
```

Hover utilities can also be combined with responsive utilities by adding the responsive  `{screen}:`  prefix  _before_  the  `hover:`  prefix.

```html
<button class="... md:bg-blue-500 md:hover:bg-blue-700 ...">Button</button>
```

## Focus

To control the background color of an element on focus, add the  `focus:`  prefix to any existing background color utility. For example, use  `focus:bg-blue-500`  to apply the  `bg-blue-500`  utility on focus.

```html
<input class="bg-gray-200 focus:bg-white ...">
```

Focus utilities can also be combined with responsive utilities by adding the responsive  `{screen}:`  prefix  _before_  the  `focus:`  prefix.

```html
<input class="... md:bg-gray-200 md:focus:bg-white ...">
```

## Customizing

### Background Colors

By default, MoonHare makes the entire [default color palette](/docs/customizing-colors#default-color-palette) available as background colors.

You can  [customize your color palette](/docs/colors#customizing)  by editing the  `theme.colors`  variable in your  configuration, or customize just your background colors using the  `theme.backgroundColor`  section of your MoonHare config.

```diff-js
  MOONHARE_CONFIG = {
    theme: {
      backgroundColor: theme => ({
-       ...theme('colors'),
+       'primary': '#3490dc',
+       'secondary': '#ffed4a',
+       'danger': '#e3342f',
      })
    }
  }
```

## Browser Support
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-clip-1619454186133.webp"><source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-clip-1619454186133.png"><img src="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-clip-1619454186133.jpg" alt="Data on support for the mdn-css__properties__background-clip feature across the major browsers from caniuse.com"></picture>

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples
