
# Dark Mode

Using MoonHare CSS to style your site in dark mode.

## Basic usage

Now that dark mode is a first-class feature of many operating systems, it's becoming more and more common to design a dark version of your website to go along with the default design.

To make this as easy as possible, MoonHare includes a  `dark`  variant that lets you style your site differently when dark mode is enabled:

```html
<div class="bg-white dark:bg-gray-800">
  <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
  <p class="text-gray-600 dark:text-gray-300">
    Lorem ipsum...
  </p>
</div>
```

Now whenever  `dark`  class is present earlier in the HTML tree, `dark:{class}` classes will take precedence over unprefixed classes.


```html
<!-- Dark mode not enabled -->
<html>
<body>
  <!-- Will be white -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>

<!-- Dark mode enabled -->
<html class="dark">
<body>
  <!-- Will be black -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>
```

How you add the  `dark`  class to the  `html`  element is up to you, but a common approach is to use a bit of JS that reads a preference from somewhere (like  `localStorage`) and updates the DOM accordingly.

Here's a simple example of how you can support light mode, dark mode, as well as respecting the operating system preference:

```js
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
```

Here is a library for DO IT.
```js
var dark = {};
dark.set = function () {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
};

dark.theme = function (theme) {
  localStorage.theme = theme // 'light' or 'dark'...
  if (theme === 'auto') localStorage.removeItem('theme'); // auto
}
```

Again you can manage this however you like, even storing the preference server-side in a database and rendering the class on the server — it's totally up to you.

----------

## Stacking with other variants

The  `dark`  variant can be combined with both  [responsive](/docs/responsive-design)  variants and  [state variants](/docs/hover-focus-and-other-states)  (like hover and focus):

```html
<button class="lg:dark:hover:bg-white ...">
  <!-- ... -->
</button>
```

The responsive variant needs to come first, then  `dark`, then the state variant for this to work.

----------

## Toggling dark mode automatically

but if you'd like to support toggling dark mode manually, you can also  [use the 'media' strategy](#toggling-dark-mode-automatically)  for more control.

If you want to support toggling dark mode automatically instead of relying on the JavaScript, use the  `media`  strategy instead of the  `class`  strategy:

```js
MOONHARECONFIG = {
  darkMode: 'media',
  // ...
}
```

Now instead of  `dark:{class}`  classes being applied based on   `dark`  class of parent, they will be applied based on  `prefers-color-scheme`.

Now whenever dark mode is enabled on the user's operating system,  `dark:{class}`  classes will take precedence over unprefixed classes. The  `media`  strategy uses the  `prefers-color-scheme`  media feature under the hood. 

