

# Utilities

Building complex components from a constrained set of primitive utilities.

## Overview

Traditionally, whenever you need to style something on the web, you write CSS.

**Using a traditional approach where custom designs require custom CSS**

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

Then Utility-first CSS frameworks came. Like Tailwind.

**Using utility classes to build custom designs without writing CSS**

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

## Syntax
MoonHare has a cool syntax for utilities. You can use Tons of properties(Read [the article on CSS-Tricks](https://css-tricks.com/how-many-css-properties-are-there/)).

```css
property-[value] -> property: value
```
_One word properties_
```css
padding-{size} -> padding: {size};
padding-[{size}] -> padding: [{size}];
```
```css
padding-3px

padding-[4rem]
```
CSS
```css
.padding-3px {
  padding: 3px;
}
.padding-\[4rem\] {
  padding: 4rem;
}
```
_Other properties_
```css
padding-left[{size}] -> padding-left: [{size}];
```
```css
padding-left[4rem]
```
CSS
```css
.padding-left\[4rem\] {
  padding: 4rem;
}
```
**Note:** You should use square brackets `[]` for `-` inclded properties.

_Variables_

You can even pass variable names, which is very useful in combination with css variables.

```css
--variableName-[{value}] -> --variableName: {value};
```
```css
--test-variable-[5px]
```
CSS
```css
.--test-variable-\[5px\] {
  --test-variable: 5px;
}
```

_Shorthand properties_

```css
border-[{value1}|{value2}|{value3}...] -> border:value1 value2 value3;
```
```css
border-[1px|solid|gray]
```
CSS

```css
.border-\[1px\|solid\|gray\] {
  border: 1px solid gray;
}
```
_Comma separated values_

```css
grid-template-columns-[repeat(1,minmax(0,1fr))]
```
CSS

```css
.grid-template-columns\:repeat\(1\,minmax\(0\,1fr\)\) {
  grid-template-columns: repeat(1,minmax(0,1fr));
}
```

**Note:** You can use any combination of above syntaxes.

If you'd like to hear about others' experiences with this approach, check out the following resources:

-   [By The Numbers: A Year and a Half with Atomic CSS](https://medium.com/@johnpolacek/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4)  by John Polacek
-   [Building a Scalable CSS Architecture](https://blog.algolia.com/redesigning-our-docs-part-4-building-a-scalable-css-architecture/)  by Sarah Dayan of Algolia
-   [Diana Mounter on using utility classes at GitHub](http://www.fullstackradio.com/75), a podcast interview

For even more, check out  [The Case for Atomic/Utility-First CSS](https://johnpolacek.github.io/the-case-for-atomic-css/), curated by  [John Polacek](https://twitter.com/johnpolacek).
