# Responsive Design

Using responsive utility variants to build adaptive user interfaces.

## Overview

Every utility class in MoonHare can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.

There are fifteen breakpoints by default, inspired by TailwindCSS(inspired by common device resolutions):

Breakpoint prefix|Minimum width|CSS
-|-|-
`sm`|640px|`@media (min-width: 640px) { ... }`
`md`|768px|`@media (min-width: 768px) { ... }`
`lg`|1024px|`@media (min-width: 1024px) { ... }`
`xl`|1280px|`@media (min-width: 1280px) { ... }`
`xxl`|1536px|`@media (min-width: 1536px) { ... }`

By default, MoonHare uses a mobile first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.

What this means is that unprefixed utilities (like  `uppercase`) take effect on all screen sizes, while prefixed utilities (like  `md:uppercase`) only take effect at the specified breakpoint  _and above_.

This means unprefixed utilities (like  `p-1`) take effect on all screen sizes, while prefixed utilities (like  `md:p-2`) only take effect at the  **specified breakpoint and above**.

We also provided the ability to have more controls over the query range by adding the  `<`  and  `@`  prefix:

-|description
-|-
`lg`  | greater or equal than this breakpoint
`<lg` | smaller than this breakpoint
`@lg` | exactly this breakpoint range

---
-|Default|`<` prefixed|`@` prefixed
-|-|-|-
`sm`|`(min-width: 640px)`|`(max-width: 639.9px)`|`(min-width: 640px) and (max-width: 767.9px)`
`md`|`(min-width: 768px)`|`(max-width: 767.9px)`|`(min-width: 768px) and (max-width: 1023.9px)`
`lg`|`(min-width: 1024px)`|`(max-width: 1023.9px)`|`(min-width: 1024px) and (max-width: 1279.9px)`
`xl`|`(min-width: 1280px)`|`(max-width: 1279.9px)`|`(min-width: 1280px) and (max-width: 1535.9px)`
`xxl`|`(min-width: 1536px)`|`(max-width: 1535.9px)`|`(min-width: 1536px)`

To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the  `:`  character:

```html
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
```

This works for  **every utility class in the framework**, which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles.

Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens  _(resize your browser to see it in action)_:


```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
```

Here's how the example above works:

-   By default, the outer  `div`  is  `display: block`, but by adding the  `md:flex`  utility, it becomes  `display: flex`  on medium screens and larger.
-   When the parent is a flex container, we want to make sure the image never shrinks, so we've added  `md:flex-shrink-0`  to prevent shrinking on medium screens and larger. Technically we could have just used  `flex-shrink-0`  since it would do nothing on smaller screens, but since it only matters on  `md`  screens, it's a good idea to make that clear in the class name.
-   On small screens the image is automatically full width by default. On medium screens and up, we've constrained that width to a fixed size using  `md:w-48`.

We've only used one breakpoint in this example, but you could easily customize this component at other sizes using the  `sm`,  `lg`, or  `xl`  responsive prefixes as well.

----------

## Customizing breakpoints

You can completely customize your breakpoints in your  configuration:

```js
MOONHARECONFIG = {
  theme: {
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
  }
}
```

Learn more in the  [customizing breakpoints documentation](/docs/breakpoints).
