---
permalink: /docs/getting-started/installation
---

# Installation

Get started with MoonHare, Powerful front-end CSS framework for developing responsive, mobile first projects on the web.

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

Looking to quickly add MoonHare to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files?  [Head to the downloads page](/download/).

### Components
_Currently in development._

### Utilities
Moon Hare has a small compiler that converts utility classes into CSS at runtime. The goal of this compiler is to prevent the carefully considered constraints of the CSS.

Place  **one of the following  `<script>`s**  near the end of your pages, right before the closing  `</body>`  tag, to enable them.

#### For browsers
The works by detecting any classe names used in your app and generate css. 

```html
<script src="https://cdn.jsdelivr.net/npm/moonhare@2.0.0/moonhare.min.js" crossorigin="anonymous"></script>
```

#### Modules
_Currently in development_


## Starter template


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

For next steps, visit the  [Layout docs](/docs/grid/)  or  [our official examples](/examples/)  to start laying out your site’s content and components.

## Important globals

MoonHare employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the  _normalization_  of cross browser styles. Let’s dive in.

### HTML5 doctype

MoonHare requires the use of the HTML5 doctype. Without it, you’ll see some funky incomplete styling, but including it shouldn’t cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

MoonHare is developed  _mobile first_(but can be used as desktop first), a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices,  **add the responsive viewport meta tag**  to your  `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

You can see an example of this in action in the  [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global  `box-sizing`  value from  `content-box`  to  `border-box`. This ensures  `padding`  does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

if you are using utilities,
```html
<some-widget class="box-content">
...
</some-widget>
```
Or,
```html
<some-widget style="box-sizing: content-box;">
...
</some-widget>
```

With the above snippet, nested elements—including generated content via  `::before`  and  `::after`—will all inherit the specified  `box-sizing`  for that  `.selector-for-some-widget`.

Learn more about  [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use  [Reboot](/docs/reboot/)  to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Community

Stay up to date on the development of MoonHare and reach out to the community with these helpful resources.

-   Read and subscribe to  The Official MoonHare Blog # TODO
-   Join  the official Slack room # TODO
-   Chat with fellow MoonHares in IRC. On the  `irc.freenode.net`  server, in the  `##moonhare`  channel. # TODO
-   Implementation help may be found at Stack Overflow (tagged  [`moonhare`] # TODO
-   Developers should use the keyword  `moonhare`  on packages that modify or add to the functionality of MoonHare when distributing through  [npm](https://www.npmjs.com/search?q=keywords:bootstrap)  or similar delivery mechanisms for maximum discoverability.  # TODO

You can also follow  [@moonharelabs on Twitter](https://twitter.com/moonharelabs)  for the latest gossip and awesome music videos.
