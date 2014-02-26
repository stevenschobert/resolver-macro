resolver-macro
==============

This [sweet.js](http://sweetjs.org) macro will help you turn any standard callback-based function
into a promise, using whichever promise library you want.

## Example

Here's an example using [when](https://github.com/cujojs/when) and the standard `fs.readFile`
command:

```js
when.promise( resolver(fs.readFile, 'hello_world.txt', {encoding: 'utf-8'}) );
```

## Getting Started

To use the macro, take a look at the [sweet.js](http://sweetjs.org) project, or setup a grunt task
using something like [grunt-sweet.js](https://github.com/natefaubion/grunt-sweet.js). You can then
just install this module and require it when running [sweet.js](http://sweetjs.org).

If you are totally new to macros, I recommend reading this excellent article:

__[Writing Your First Sweet.js Macro](http://jlongster.com/Writing-Your-First-Sweet.js-Macro) by
James Long__

## Usage

The `resolver` macro will match the following pattern:

```js
resolver(FUNCITON, ARGS...)
```

And expand it to:

```js
function(resolve, reject, notify) {
  FUNCTION(ARGS..., function(err, result) {
    if (err) {
      reject(err);
    }
    resolve(result);
  }
}
```

This allows you to wrap that resolver function in any promise library you want. It will take
any arguments in `ARGS...` and pass them to `FUNCTION`, and then add on the callback handling
function for you.
