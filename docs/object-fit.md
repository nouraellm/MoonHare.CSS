
# Object Fit

Utilities for controlling how a replaced element's content should be resized.

## Default class reference

Class|Properties
-|-
`object-contain`|`object-fit: contain;`
`object-cover`|`object-fit: cover;`
`object-fill`|`object-fit: fill;`
`object-none`|`object-fit: none;`
`object-scale-down`|`object-fit: scale-down;`

## Contain

Resize an element's content to stay contained within its container using  `.object-contain`.


```html
<div class="bg-rose-300 ...">
  <img class="object-contain h-48 w-full ...">
</div>
```

## Cover

Resize an element's content to cover its container using  `.object-cover`.

```html
<div class="bg-indigo-300 ...">
  <img class="object-cover h-48 w-full ...">
</div>
```

## Fill

Stretch an element's content to fit its container using  `.object-fill`.


```html
<div class="bg-light-blue-300 ...">
  <img class="object-fill h-48 w-full ...">
</div>
```

## None

Display an element's content at its original size ignoring the container size using  `.object-none`.


```html
<div class="bg-yellow-300">
  <img class="object-none h-48 w-full ...">
</div>
```

## Scale Down

Display an element's content at its original size but scale it down to fit its container if necessary using  `.object-scale-down`.


```html
<div class="bg-green-300">
  <img class="object-scale-down h-48 w-full ...">
</div>
```

## Responsive

To control how a replaced element's content should be resized only at a specific breakpoint, add a  `{screen}:`  prefix to any existing object fit utility. For example, adding the class  `md:object-scale-down`  to an element would apply the  `object-scale-down`  utility at medium screen sizes and above.

```html
<div>
  <img class="object-contain md:object-scale-down ..." src="...">
</div>
```

For more information about MoonHare's responsive design features, check out the  [Responsive Design](/docs/responsive-design)  documentation.
