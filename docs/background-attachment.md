
# Background Attachment

Utilities for controlling how a background image behaves when scrolling.

## Default class reference

Class|Properties
-|-
`bg-fixed`|`background-attachment: fixed;`
`bg-local`|`background-attachment: local;`
`bg-scroll`|`background-attachment: scroll;`
`bg-local-scroll`|`background-attachment: local, scroll;`
`bg-scroll-local`|`background-attachment: scroll, local;`

## Fixed

Use  `bg-fixed`  to fix the background image relative to the viewport.

> **Note:**This is not compatible with [`bg-text`, `background-clip: text`](/docs/background-clip).

```html
<div class="bg-fixed ..." style="background-image: url(...)"></div>
```

## Local

Use  `bg-local`  to scroll the background image with the container and the viewport.

```html
<div class="bg-local ..." style="background-image: url(...)"></div>
```

## Scroll

Use  `bg-scroll`  to scroll the background image with the viewport, but not with the container.

```html
<div class="bg-scroll ..." style="background-image: url(...)"></div>
```

## Responsive

To control the background attachment of an element at a specific breakpoint, add a  `{screen}:`  prefix to any existing background attachment utility. For example, use  `md:bg-fixed`  to apply the  `bg-fixed`  utility at only medium screen sizes and above.

```html
<div class="bg-local md:bg-fixed ...">
  <!-- ... -->
</div>
```

For more information about MoonHare's responsive design features, check out the  [Responsive Design](/docs/responsive-design)  documentation.

## Multiple background images
This property supports multiple background images. You can specify a different  `<attachment>`  for each background, separated by commas. Each image is matched with the corresponding  `<attachment>`  type, from first specified to last.
```html
<div class="bg-fixed-scroll ..." style="background-image: url(...), url(...)"></div>
```


## Browser Support
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/background-attachment.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/background-attachment.png">
<img src="https://caniuse.bitsofco.de/image/background-attachment.jpg" alt="Data on support for the background-attachment feature across the major browsers from caniuse.com">
</picture>

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples
