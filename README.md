
<p align="center">
  <a href="#nolink">
    <img src="https://github.com/MoonHareLabs.png" alt="Beautify logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Beautify</h3>

<p align="center">
  Beautiful, costomizeable, and powerful front-end framework for faster and easier web development.
  <br>
  <a href="#docs"><strong>Explore Beautify docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/beautifycss/Beautify/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/beautifycss/Beautify/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="#demo">View Demo</a>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

There are many great CSS frameworks available on for web development, however, they are different. I wanted a fully customizeable and easy to use solution. So I created a new framework.

- Customizeable - Offers a head start implementing a custom design with its own identity.
- No Javascript - Only pure css...
- Responsive - It's working finely in different devices, and mobile-first.
- Grid - Responsive and Powerful grid system,
- Components - Basic extensive prebuilt components.

### Built With

Beautify is created using SASS(Syntactically Awesome Style Sheets). and Compiled(Converted) to CSS(Cascading Style Sheets).
Featuring Sass variables and mixins to customize from ground.
```scss
$colors: (
  red: #fff,
  ...
};
```

<!-- GETTING STARTED -->
## Getting Started

Get started with Beautify.css, Framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.
Looking to quickly add Beautify to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? [Head to the releases page](https://github.com/beautifycss/Beautify/releases).

### Installation
Copy-paste the stylesheet  `<link>`  into your  `<head>`  before all other stylesheets to load our CSS.

```html
<link href="https://cdn.jsdelivr.net/gh/beautifycss/Beautify/dist/css/beautify.min.css" rel="stylesheet" crossorigin="anonymous">
```

### Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

Copy

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Beautify.CSS -->
    <link href="https://cdn.jsdelivr.net/gh/beautifycss/Beautify/dist/css/beautify.min.css" rel="stylesheet" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>

```

That’s all you need for overall page requirements.

<!-- USAGE EXAMPLES -->
## Usage


### Important globals

Beautify employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the  _normalization_  of cross browser styles. Let’s dive in.

#### HTML5 doctype

Beautify requires the use of the HTML5 doctype. Without it, you’ll see some funky incomplete styling, but including it shouldn’t cause any considerable hiccups.
```html
<!doctype html>
<html lang="en">
  ...
</html>
```

#### Responsive meta tag

Beautify is developed  _mobile first_, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices,  **add the responsive viewport meta tag**  to your  `<head>`.
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

#### Box-sizing

For more straightforward sizing in CSS, we switch the global  `box-sizing`  value from  `content-box`  to  `border-box`. This ensures  `padding`  does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}

```

With the above snippet, nested elements—including generated content via  `::before`  and  `::after`—will all inherit the specified  `box-sizing`  for that  `.selector-for-some-widget`.

Learn more about  [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

#### Reset

For improved cross-browser rendering, we use  **Reset**  to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/beautifycss/Beautify/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Read our [contributing guide](https://github.com/beautifycss/Beautify/blob/main/CONTRIBUTING.md) and [Code of conduct](https://github.com/beautifycss/Beautify/blob/main/CODE_OF_CONDUCT.md) before contributing.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/beautifycss/Beautify/blob/main/LICENSE) for more information.

<!-- CONTACT -->
## Contact
N/A

