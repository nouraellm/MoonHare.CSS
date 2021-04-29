

# Hover, Focus, & Other States

Using utilities to style elements on hover, focus, and more.

## Overview

Similar to how MoonHare handles  [responsive design](/docs/responsive-design), styling elements on hover, focus, and more can be accomplished by prefixing utilities with the appropriate state variant.

```html
<form>
  <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ...">
  <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
    Sign up
  </button>
</form>
```

**All state variants are enabled for all utilities by default.**

If you need to target a state that MoonHare doesn't support, you can extend the supported variants by  [writing a variant plugin](#creating-custom-variants).

----------

## Hover

Add the  `hover:`  prefix to only apply a utility on hover.

```html
<button class="bg-red-500 hover:bg-red-700 ...">
  Hover me
</button>
```


----------

## Focus

Add the  `focus:`  prefix to only apply a utility on focus.

```html
<input class="focus:ring-2 focus:ring-blue-600 ...">
```

----------

## Active

Add the  `active:`  prefix to only apply a utility when an element is active.

```html
<button class="bg-green-500 active:bg-green-700 ...">
  Click me
</button>
```

----------

## Group-hover

If you need to style a child element when hovering over a specific parent element, add the  `group`  class to the parent element and add the  `group-hover:`  prefix to the utility on the child element.

```html
<div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
  <p class="text-indigo-600 group-hover:text-gray-900 ...">New Project</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">Create a new project from a variety of starting templates.</p>
</div>
```

----------

## Group-focus

The  `group-focus`  variant works just like  [`group-hover`](#group-hover)  except for focus:

```html
<button class="group bg-yellow-500 focus:bg-yellow-600 ...">
  <svg class="text-white group-focus:text-yellow-300 ..."></svg>
  Bookmark
</button>
```


----------

## Focus-within

Add the  `focus-within:`  prefix to only apply a utility when a child element has focus.

```html
<form>
  <div class="text-gray-400 focus-within:text-gray-600 ...">
    <div class="...">
      <svg fill="currentColor"></svg>
    </div>
    <input class="focus:ring-2 focus:ring-gray-300 ...">
  </div>
</form>
```

----------

## Focus-visible

<!-- Note that focus-visible currently requires JS polyfills for sufficient browser support. -->

Add the  `focus-visible:`  prefix to only apply a utility when an element has focus but only if the user is using the keyboard.

```html
<button class="focus:ring-2 focus:ring-red-500 ...">
  Ring on focus
</button>
<button class="focus-visible:ring-2 focus-visible:ring-rose-500 ...">
  Ring on focus-visible
</button>
```

<!-- Note that currently only  [Chrome, Edge, and Firefox](https://caniuse.com/?search=focus-visible)  support  `focus-visible`  natively, so for sufficient browser support you should install and configure the  [focus-visible JS polyfill](https://github.com/WICG/focus-visible). -->

----------

## Motion-safe

Add the  `motion-safe:`  prefix to only apply a utility when the  `prefers-reduced-motion`  media feature matches  `no-preference`.

For example, this button will only animate on hover if the user hasn't enabled "Reduce motion" on their system.


```html
<button class="transform motion-safe:hover:scale-110 ...">
  Hover me
</button>
```

`motion-safe`  can be combined with both responsive variants  _and_  other variants like  `hover`, by stacking them in this order:

```html
<div class="sm:motion-safe:hover:animate-spin">
  <!-- ... -->
</div>
```



----------

## Motion-reduce

Add the  `motion-reduce:`  prefix to only apply a utility when the  `prefers-reduced-motion`  media feature matches  `reduce`.

For example, this button will animate on hover by default, but the animations will be disabled if the user has enabled "Reduce motion" on their system.

```html
<button class="transform hover:scale-110 motion-reduce:transform-none ...">
  Hover me
</button>
```

`motion-reduce`  can be combined with both responsive variants  _and_  other variants like  `hover`, by stacking them in this order:

```html
<div class="sm:motion-reduce:hover:animate-none">
  <!-- ... -->
</div>
```



----------

## Disabled

Add the  `disabled:`  prefix to only apply a utility when an element is disabled.


```html
<button class="disabled:opacity-50 ...">
  Submit
</button>
<button class="disabled:opacity-50 ..." disabled>
  Submit
</button>
```

----------

## Visited

Add the  `visited:`  prefix to only apply a utility when a link has been visited.

```html
<a href="#" class="text-blue-600 visited:text-purple-600 ...">Link</a>
```

----------

## Checked

Add the  `checked:`  prefix to only apply a utility when a radio or checkbox is currently checked.


```html
<input type="checkbox" class="appearance-none checked:bg-blue-600 checked:border-transparent ...">
```

----------

## First-child

Add the  `first:`  prefix to only apply a utility when it is the first-child of its parent. This is mostly useful when elements are being generated in some kind of loop.

```html
<div class="...">
  <div v-for="item in items" class="transform first:rotate-45 ...">
    {{ item }}
  </div>
</div>
```

It's important to note that you should add any  `first:`  utilities to the child element, not the parent element.

----------

## Last-child

Add the  `last:`  prefix to only apply a utility when it is the last-child of its parent. This is mostly useful when elements are being generated in some kind of loop.

```html
<div class="...">
  <div v-for="item in items" class="transform last:rotate-45 ...">
    {{ item }}
  </div>
</div>
```

It's important to note that you should add any  `last:`  utilities to the child element, not the parent element.



----------

## Odd-child

Add the  `odd:`  prefix to only apply a utility when it is an odd-child of its parent. This is mostly useful when elements are being generated in some kind of loop.

```html
<div class="...">
  <div v-for="item in items" class="transform odd:rotate-45 ...">
    {{ item }}
  </div>
</div>
```

It's important to note that you should add any  `odd:`  utilities to the child element, not the parent element.


----------

## Even-child

Add the  `even:`  prefix to only apply a utility when it is an even-child of its parent. This is mostly useful when elements are being generated in some kind of loop.

```html
<div class="...">
  <div v-for="item in items" class="transform even:rotate-45 ...">
    {{ item }}
  </div>
</div>
```

It's important to note that you should add any  `even:`  utilities to the child element, not the parent element.



----------

## Combining with responsive prefixes

State variants are also responsive, meaning you can do things like change an element's hover style at different breakpoints for example.

To apply a state variant at a specific breakpoint, add the responsive prefix first, before the state prefix:

```html
<button class="... hover:bg-green-500 sm:hover:bg-blue-500">
  <!-- ... -->
</button>
```

----------
<!--
## Generating variants for custom utilities

You can generate state variants for your own custom CSS classes by wrapping them with the  `@variants`  directive:

```css
/* Input: */
@variants group-hover, hover, focus {
  .banana {
    color: yellow;
  }
}

/* Output: */
.banana {
  color: yellow;
}
.group:hover .group-hover\:banana {
  color: yellow;
}
.hover\:banana:hover {
  color: yellow;
}
.focus\:banana:focus {
  color: yellow;
}

```

For more information, see the  [@variants directive documentation](/docs/functions-and-directives#variants).
-->
----------
<!--
## Creating custom variants

You can create your own variants for any states MoonHare doesn't support by default by writing a custom variant plugin.

For example, this simple plugin adds support for the  `required`  pseudo-class variant:

```js
module.exports = {
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('required', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`required${separator}${className}`)}:required`
        })
      })
    })
  ]
}
```

Learn more about writing variant plugins in the  [variant plugin documentation](/docs/plugins#adding-variants).
-->
