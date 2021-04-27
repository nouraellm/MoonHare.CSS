# Background Repeat

Utilities for controlling the repetition of an element's background image.

## Default class reference

Class|Properties
-|-
`bg-repeat`|`background-repeat: repeat;`
`bg-no-repeat`|`background-repeat: no-repeat;`
`bg-repeat-x`|`background-repeat: repeat-x;`
`bg-repeat-y`|`background-repeat: repeat-y;`
`bg-repeat-round`|`background-repeat: round;`
`bg-repeat-space`|`background-repeat: space;`

## Repeat

Use  `bg-repeat`  to repeat the background image both vertically and horizontally.

```html
<div class="bg-repeat ..." style="background-image: url(...)"></div>
```

## No Repeat

Use  `bg-no-repeat`  when you don't want to repeat the background image.

```html
<div class="bg-no-repeat bg-center ..." style="background-image: url(...)"></div>
```

## Repeat Horizontally

Use  `bg-repeat-x`  to repeat the background image only horizontally.

```html
<div class="bg-repeat-x bg-center ..." style="background-image: url(...)"></div>
```

## Repeat Vertically

Use  `bg-repeat-y`  to repeat the background image only vertically.

```html
<div class="bg-repeat-y bg-center ..." style="background-image: url(...)"></div>
```

## Responsive

To control the repetition of an element's background image at a specific breakpoint, add a  `{screen}:`  prefix to any existing background repeat utility. For example, adding the class  `md:bg-repeat-x`  to an element would apply the  `bg-repeat-x`  utility at medium screen sizes and above.

```html
<div class="bg-repeat md:bg-repeat-x ..."></div>
```

For more information about MoonHare's responsive design features, check out the  [Responsive Design](/docs/responsive-design)  documentation.

## Browser Support
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-repeat-1619539206670.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-repeat-1619539206670.png">
<img src="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-repeat-1619539206670.jpg" alt="Data on support for the mdn-css__properties__background-repeat feature across the major browsers from caniuse.com">
</picture>

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples
