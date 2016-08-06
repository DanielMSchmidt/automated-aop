# automated-aop

> Automate your code with ease

This module is for you if you would like to execute code before, after or as call of another type of functions


## Install

```
$ npm install --save automated-aop
```


## Usage

```js
const automatedAop = require('automated-aop');

// Configure the generator
const generator = automatedAop('function/method/both', {
	exclude: {
		anonymous: true,
		name: 'private_*'
	},
	before: 'console.log('Who do you call?');',
	call: 'window.ghost.busters.work', // results in window.ghost.busters.work(function ...)
	after: function(path) {
		return 'console.log('Ghost Busters!', path);'
	},
});

generator('./input.js', './output.js'); // generate

```


## API

### automatedAop(type, [options])

#### type

Type: `string`

One of function, method or both, depending on what kind of expressions you would like to target

#### options

##### exclude

Type: `Object`<br>
Default: `{}`

Can include anonymous to exclude anonymous functions and have a RegEx filter on the name

##### before, call, after
Type: `String` or `Function(String)`

If chosen a function, the parameter is the path


## License

MIT © [Daniel Schmidt](http://danielmschmidt.de)
