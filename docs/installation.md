---
permalink: /docs/getting-started/installation
---

# Installation

Learn how to get MoonHare CSS up and running in your project.

## Integration guides

Installing MoonHare CSS can be a slightly different process depending on what other frameworks/tools you're using, so we've put together a bunch of guides that cover popular setups.

- Next.js
- Vue 3 (Vite)
- Laravel
- Nuxt.js
- Create React App
- Gatsby

Don't see your favorite tool in the list? We're always working on new guides, 
[Open a new issue](#TODO)


## Using MoonHare via CDN

Grab the latest default configuration build via CDN:

```html
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
```

----------

## HTML starter template

For MoonHare's styles to work as expected, you'll want to use the HTML5 doctype and include the responsive viewport meta tag to properly handle responsive styles on all devices.

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="https://cdn.jsdelivr.net/npm/moonhare@2.0.0/moonhare.min.js" crossorigin="anonymous"></script>

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

  </body>
</html>
```

Many front-end frameworks like Next.js, vue-cli and others do all this for you behind the scenes automatically, so depending on what you're building you might not need to set this up.
