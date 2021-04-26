# Background Clip

Utilities for controlling the bounding box of an element's background.

## Default class reference

Class|Properties
-|-
`bg-clip-border`|`background-clip: border-box;`
`bg-clip-padding`|`background-clip: padding-box;`
`bg-clip-content`|`background-clip: content-box;`
`bg-clip-text`|`background-clip: text;`

## Usage

Use the  `bg-clip-{keyword}`  utilities to control the bounding box of an element's background.

```html
<div class="bg-clip-border p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed"></div>
<div class="bg-clip-padding p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed"></div>
<div class="bg-clip-content p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed"></div>
```

## Cropping to text

Use  `bg-clip-text`  to crop an element's background to match the shape of the text. Useful for effects where you want a background image to be visible through the text.

```html
<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
    Hello world
  </span>
</div>
```

## Responsive

To control the bounding box of an element's background at a specific breakpoint, add a  `{screen}:`  prefix to any existing background clip utility. For example, adding the class  `md:bg-clip-padding`  to an element would apply the  `bg-clip-padding`  utility at medium screen sizes and above.

```html
<div class="bg-clip-border md:bg-clip-padding">
  <!-- ... -->
</div>
```

For more information about MoonHare's responsive design features, check out the  [Responsive Design](/docs/responsive-design)  documentation.

## Browser Support
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-clip-1619454186133.webp"><source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-clip-1619454186133.png"><img src="https://caniuse.bitsofco.de/static/v1/mdn-css__properties__background-clip-1619454186133.jpg" alt="Data on support for the mdn-css__properties__background-clip feature across the major browsers from caniuse.com"></picture>

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples
