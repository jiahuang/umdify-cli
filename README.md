umdify-cli
=========

umdify-cli is a tool to help convert amd module definitions to the [returnExports](https://github.com/umdjs/umd/blob/master/templates/returnExports.js) umd format.

Usage:
```
npm install -g umdify-cli
umdify-cli app/**/*.js
```

Converts from something like this:
```js
define(['underscore'], function(_) {
  return {
    something: function(){
      console.log("something was called");
    }
  };
});
```

to something like this:
```js
// This was autogenerated by umdify-cli
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === "function" && define.amd) {
    define([
      'underscore'
    ], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(
      require('underscore')
    );
  } else {
    root.returnExports = factory(
      root._
    );
  }
}(this, function (
  _
) {
  return {
    something: function(){
      console.log("something was called");
    }
  };
}));
```
