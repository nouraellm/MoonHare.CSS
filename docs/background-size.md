
# Background Size

Utilities for controlling the background size of an element's background image.

## Class reference

Class|Properties
-|-
`bg-auto`|`background-size: auto;`
`bg-cover`|`background-size: cover;`
`bg-contain`|`background-size: contain;`

## Auto

Use  `bg-auto`  to display the background image at its default size.

```html
<div class="bg-auto bg-no-repeat bg-center ..." style="background-image: url(...)"></div>
```

## Cover

Use  `bg-cover`  to scale the background image until it fills the background layer.

```html
<div class="bg-cover bg-center ..." style="background-image: url(...)"></div>
```

## Contain

Use  `bg-contain`  to scale the background image to the outer edges without cropping or stretching.

```html
<div class="bg-contain bg-center ..." style="background-image: url(...)"></div>
```

## Responsive

To control the size of an element's background image at a specific breakpoint, add a  `{screen}:`  prefix to any existing background size utility. For example, adding the class  `md:bg-contain`  to an element would apply the  `bg-contain`  utility at medium screen sizes and above.

```html
<div class="bg-auto md:bg-contain ..."></div>
```

For more information about MoonHare's responsive design features, check out the  [Responsive Design](/docs/responsive-design)  documentation.

## Customizing

By default, MoonHare provides utilities for  `auto`,  `cover`, and  `contain`  background sizes. You can change, add, or remove these by editing the  `theme.backgroundSize`  section of your config.

```diff-js
  MOONHARECONFIG = {
    theme: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
+       '50%': '50%',
+       '16': '4rem',
      }
    }
  }
```

## Browser Support
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-size-1619539380141.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-size-1619539380141.png">
<img src="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-size-1619539380141.jpg" alt="Data on support for the mdn-css__properties__background-size feature across the major browsers from caniuse.com">
</picture>

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples

