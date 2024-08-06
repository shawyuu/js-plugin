# @shawyu/tooltip

Tooltip plugins are a useful and widely-adopted feature in web development, especially in user interfaces (UI) where they provide additional information or context to elements on a page without cluttering the main content area. 

Tooltip.js is an lightweight bubble hint library for JavaScript and Node.js. 


[Github地址](https://github.com/shawyuu/js-plugin/tree/main/tooltip)

```
https://github.com/shawyuu/js-plugin/tree/main/tooltip
```

## Getting started

### Install

```sh
npm install @shawyu/tooltip
```

### In browser

```
<script src="../tooltip/index.js"></script>
```

### Usage

```js
import Tooltip from '@shawyu/tooltip'

Tooltip.show(selector,option)
```

### Target types [selector]
The first argument is the targets you want to give tooltips to. This can represent one or many different elements.

```js
// String (CSS selector matching elements on the document)
Tooltip.show('#id');
Tooltip.show('.class');
Tooltip.show('[data-tip-content]');

// Element
Tooltip.show(document.getElementById('element'));

// Element[]
Tooltip.show([element1, element2]);

// NodeList
Tooltip.show(document.querySelectorAll('elements'));
```
### Content types
Plain text and HTML (string or element) are allowed.

```js
Tooltip.show('#id', {
    content: 'Tooltip Content',
    attr:'',  // higher priority than content
    placement: 'top-start',
    showArrow:true,
    bgColor:"#333",
    animation:"FadeDown"
});
```

Give elements you would like to give tooltips to a `data-tip-content` attribute or custom attribute,like `data-custom-content`.
```html
<button data-tip-content="Tooltip Content">Text</button>  <!-- default attribute -->
<button data-custom-content="Tooltip Content">Text</button>  <!-- custom attribute -->
<button data-others="Tooltip Content">Text</button>  <!-- custom attribute -->
```
Call the Tooltip.show() function.
```js
Tooltip.show('[data-tip-content]'); /*default attribute*/

Tooltip.show('[data-tip-content]',{ /*Or customize the text content to be prompted*/
    content:"Tooltip Content"
});

Tooltip.show('[data-custom-content]',{ /*custom attribute*/
    attr:"data-custom-content"
});
```

If targeting a single element.
```html
<button id="singleElement">Text</button>
```

```js
Tooltip.show('#singleElement',{
    content:"Tooltip Content"
});
```

### All Props

|PROP|DEFAULT|DESCRIPTION|
|:-:|:-:|:-:|
|content| `""` |The content of the tooltip.Possible values: `string` or `HTML Content`|
|attr| `data-tip-content` | Custom attribute names on tags.it can replace `content`, with higher priority than that.|
|placement| `top` |Positions the tooltip relative to its reference element. Possible values:`top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`|
|showArrow| `true` | Determines if the tooltip has an arrow.|
|animation| `FadeDown` | The type of transition animation.Possible values:`FadeDown`、`Fade`|
|bgColor| `#333` | Background of the tooltip. when `showArrow` is `false`, it takes effect.it can be a color or gradient color.Possible values:`#f00`、`rgba(255,0,0,0.8)`、`linear-gradient(45deg, #9fe597 0%, #cce581 99%, #fad0c4 100%)`|

### Logs

> 1.0.4  Fix initialization duplicate styles\
> 1.0.5  Fix and optimize
