# Container

A component for fixing an element's width to the current breakpoint.

## Default class reference
Class|Breakpoint|Properties
-|-|-
`container`|	None|	`width: 100%;`
-|`sm (640px)`|	`max-width: 640px;`
-|`md (768px)`|	`max-width: 768px;`
-|`lg (1024px)`|	`max-width: 1024px;`
-|`xl (1280px)`|	`max-width: 1280px;`
-|`xxl (1536px)`|	`max-width: 1536px;`

## Usage

The  `container`  class sets the  `max-width`  of an element to match the  `min-width`  of the current breakpoint. This is useful if you'd prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport.

Note that unlike containers you might have used in many other frameworks,  **MoonHare's container does not center itself automatically and does not have any built-in horizontal padding.** like Tailwind CSS.

To center a container, use the  `mx-auto`  utility:

```html
<div class="container mx-auto">
  <!-- ... -->
</div>
```

To add horizontal padding, use the  `px-{size}`  utilities:

```html
<div class="container mx-auto px-4">
  <!-- ... -->
</div>
```

If you'd like to center your containers by default or include default horizontal padding, see the  [customization options](#customizing)  below.

## Responsive variants

The  `container`  class also includes responsive variants like  `md:container`  by default that allow you to make something behave like a container at only a certain breakpoint and up:

```html
<!-- Full-width fluid until the `md` breakpoint, then lock to container -->
<div class="md:container md:mx-auto">
  <!-- ... -->
</div>
```

## Customizing

### Centering by default

To center containers by default, set the  `center`  option to  `true`  in the  `theme.container`  section of your config file:

```js
MOONHARE_CONFIG = {
  theme: {
    container: {
      center: true,
    },
  },
}
```

### Horizontal padding

To add horizontal padding by default, specify the amount of padding you'd like using the  `padding`  option in the  `theme.container`  section of your config file:

```js
MOONHARE_CONFIG = {
  theme: {
    container: {
      padding: '2rem',
    },
  },
}
```

If you want to specify a different padding amount for each breakpoint, use an object to provide a  `default`  value and any breakpoint-specific overrides:

```js
MOONHARE_CONFIG = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        xxl: '6rem',
      },
    },
  },
};
```

## Checklist
- [ ] implementation
- [ ] documentation
- [ ] tests
- [ ] examples
