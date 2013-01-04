TextFit
=======

A smart JavaScript module to measure text in pixels, choose the "best fit" font size or trim a sentence to fit a container.


`.textfit('width', string)`
--------------------------------------

Returns the length of `string` in pixels, given the font face and size of the target element.

**Example**

HTML
```html
<div id="test1"></div>
```

CSS
```css
#test1 { font-size: 35px; }
```

JavaScript
```javascript
console.log($('#test1').textfit('width','Testing'));
```

Output
```
107
```

`.textfit('bestfit')`
--------------------------------------

Adjusts the font size of the target element so that the string fits it perfectly. **The target element must have an absolute width and height.**

**Example**

HTML
```html
<div id="test2">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
```

CSS
```css
#test2 {
  border: 1px solid red;
  width: 120px;
  height: 50px;
}
```

JavaScript
```javascript
$("#test2").textfit('bestfit');
```

`.textfit('truncate')`
--------------------------------------

Trims the contents of the target element to the size of the element. **The target element must have an absolute width and height.**

**Example**

HTML
```html
<div id="test3">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
```

CSS
```css
#test3 {
  border: 1px solid blue;
  width: 300px;
  height: 40px;
}
```

JavaScript
```javascript
$("#test3").textfit('truncate');
```







Copyright &copy; 2013 [Nick Brunt](http://nickbrunt.com)
