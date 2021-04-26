# Box Decoration Break

Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.

## Default class reference

Class|Properties
-|-
`decoration-slice`|`-webkit-box-decoration-break: slice;`<br>`box-decoration-break: slice;`
`decoration-clone`|`-webkit-box-decoration-break: slice;`<br>`box-decoration-break: clone;`

## Usage

Use the  `decoration-slice`  and  `decoration-clone`  utilities to control whether properties like background, border, border-image, box-shadow, clip-page, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks.

Hello  
World

```html
<span class="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ...">
  Hello<br>
  World
</span>
```

## Responsive

To control the box-decoration-break property at a specific breakpoint, add a  `{screen}:`  prefix to any existing box-decoration-break utility. For example, use  `md:decoration-slice`  to apply the  `decoration-slice`  utility at only medium screen sizes and above.

```html
<div class="decoration-clone md:decoration-slice ...">
  <!-- ... -->
</div>
```

For more information about Tailwind's responsive design features, check out the  [Responsive Design](https://tailwindcss.com/docs/responsive-design)  documentation.

## Browser Support
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-boxdecorationbreak.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-boxdecorationbreak.png">
<img src="https://caniuse.bitsofco.de/image/css-boxdecorationbreak.jpg" alt="Data on support for the css-boxdecorationbreak feature across the major browsers from caniuse.com">
</picture>

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples
