
# Background Position

Utilities for controlling the position of an element's background image.

## Class reference

Class|Properties
-|-
`bg-bottom`|`background-position: bottom;`
`bg-center`|`background-position: center;`
`bg-left`|`background-position: left;`
`bg-left-bottom`|`background-position: left bottom;`
`bg-left-top`|`background-position: left top;`
`bg-right`|`background-position: right;`
`bg-right-bottom`|`background-position: right bottom;`
`bg-right-top`|`background-position: right top;`
`bg-top`|`background-position: top;`

## Usage

Use the  `bg-{side}`  utilities to control the position of an element's background image.

```html
<div class="bg-no-repeat bg-left-top ..." style="background-image: url(...);"></div>
<div class="bg-no-repeat bg-top ..." style="background-image: url(...);"></div>
<div class="bg-no-repeat bg-right-top ..." style="background-image: url(...);"></div>
<div class="bg-no-repeat bg-left ..." style="background-image: url(...);"></div>
<div class="bg-no-repeat bg-center ..." style="background-image: url(...);"></div>
<div class="bg-no-repeat bg-right ..." style="background-image: url(...);"></div>
<div class="bg-no-repeat bg-left-bottom ..." style="background-image: url(...);"></div>
<div class="bg-no-repeat bg-bottom ..." style="background-image: url(...);"></div>
<div class="bg-no-repeat bg-right-bottom ..." style="background-image: url(...);"></div>
```

## Responsive

To control the position of an element's background image at a specific breakpoint, add a  `{screen}:`  prefix to any existing background position utility. For example, adding the class  `md:bg-top`  to an element would apply the  `bg-top`  utility at medium screen sizes and above.

```html
<div class="bg-center md:bg-top ..." style="background-image: url(...)"></div>
```

For more information about Tailwind's responsive design features, check out the  [Responsive Design](/docs/responsive-design)  documentation.

## Customizing

### Background Positions

By default, MoonHare provides nine  `background-position`  utilities. You change, add, or remove these by editing the  `theme.backgroundPosition`  section of your MonHare config.

```diff-js
  MOONHARECONFIG = {
    theme: {
      backgroundPosition: {
        bottom: 'bottom',
+       'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
-       'left-bottom': 'left bottom',
-       'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
+       'top-4': 'center top 1rem',
      }
    }
  }
```

## Browser Support
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-position-1619538192570.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-position-1619538192570.png">
<img src="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-position-1619538192570.jpg" alt="Data on support for the mdn-css__properties__background-position feature across the major browsers from caniuse.com">
</picture>

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples
