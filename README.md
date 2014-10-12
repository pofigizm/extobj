# extobj.js v0.1.2
###[en]
`extobj.js` extend standard Object with new methods assignDeep, createDeep and cloneDeep, which works recursively as standard methods (assign(es6) and create) to all levels of object, including array.

`assignDeep` return self first argument with overridden value and methods from last to third arguments. All array in first argument will be cleaned before inserting.

`assignDeepArray` work as assignDeep, but array in first argument will not be cleaned before inserting. Value of array will override by index.

`createDeep` return new object cloned from second arguments with set prototype to first arguments. Also on each down object will be set prototype to upper object.

`cloneDeep` return new object which clonning object in argument.

###[rus]
`extobj.js` расширяет стандартный Object новыми методами assignDeep, createDeep и cloneDeep, которые делают тоже что и стандартные (assign(es6) и create) только рекурсивно ко всем уровням обьекта, включаяя массивы.

`assignDeep` возвращает свой первый аргумент с переопределенными значениями и методами из обьектов с последнего до третьего аргумента. Все масивы будут сначала очищенны.

`assignDeepArray` работает также как assignDeep, но массивы не очищаются перед вставкой. Значения массивов переписываются по индексу.

`createDeep` возвращает новый обьект клонированный от второго аргумента с установленным прототипом на первый аргумент. Также на каждый внутрениий обьект будет установлен прототип на верхний обьект.

`cloneDeep` возвращает новый обьект - полную копию переданного в аргумент обьекта.

## Getting Started
### On the server
Install the module with:
```bash
npm install extobj
```

Use in your code:
```javascript
require('extobj');

// Object.assignDeep( )
var result = Object.assignDeep( result, from [, andfrom [, ...] ] );

// Object.createDeep( )
var resObject = Object.createDeep( protoObject, fromObject );

// Object.cloneDeep( )
var resObject = Object.cloneDeep( fromObject );
```

### In the browser
Install the module with:
```bash
bower install Pofigizm/extobj
```
Or download only the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/Pofigizm/extobj/master/dist/extobj.min.js
[max]: https://raw.githubusercontent.com/Pofigizm/extobj/master/dist/extobj.js

Use in your web page:
```html
<script src="bower_components/extobj/dist/extobj.min.js"></script>

<script>
// Object.assignDeep( )
var result = Object.assignDeep( result, from [, andfrom [, ...] ] );

// Object.createDeep( )
var result = Object.createDeep( proto, from );

// Object.cloneDeep( )
var resObject = Object.cloneDeep( fromObject );
</script>
```

## Documentation
_(Coming soon)_

## Examples

### Object.assignDeep()
```javascript
var target = {a:2};
var source = {a:{a:{a:1}},c:[{a:1}]};

Object.assignDeep( target, source ) === target // true
Object.assignDeep( {}, source ) !== source // true

Object.assignDeep( {a:{a:{a:2}}}, {a:{a:{a:1}}} ) // {a:{a:{a:1}}}
Object.assignDeep( {a:1}, {b:1}, {c:1}, {d:1} ) // {a:1, b:1, c:1, d:1}
Object.assignDeep( {a:1}, {a:2, b:1}, {a:3, c:1} ) // {a:3, b:1, c:1}
Object.assignDeep( {a:1}, {b:[1,2,3,4,5]}, {b:[6,7,8]} ) // {a:1, b:[6,7,8]}

var arr = [6,7,8];
Object.assignDeep( {a:1}, {b:arr} ).b !== arr // true
```

### Object.assignDeepArray()
all works as `assignDeep`, but
```javascript
Object.assignDeepArray( {a:1}, {b:[1,2,3,4,5]}, {b:[6,7,8]} ) // {a:1, b:[6,7,8,4,5]}
```
### Object.createDeep()
```javascript
var proto = {value:123};
var source = {a:1, obj: {b:1, obj: {c:1}}, arr:[{d:1, obj:{e:1}}]};

Object.createDeep( proto, source ) !== source // true
Object.createDeep( proto, source ) // {a:1, obj: {b:1, obj: {c:1}}, arr:[{d:1, obj:{e:1}}]}

// prototype value
Object.createDeep( proto, source ).value             // 123
Object.createDeep( proto, source ).obj.value         // 123
Object.createDeep( proto, source ).obj.obj.value     // 123
Object.createDeep( proto, source ).arr.value         // 123
Object.createDeep( proto, source ).arr[0].value      // 123
Object.createDeep( proto, source ).arr[0].obj.value  // 123
```

### Object.cloneDeep()
```javascript
var source = {a:1, obj: {b:1, obj: {c:1}}, arr:[{d:1, obj:{e:1}}]};

Object.createDeep( source ) !== source // true
Object.createDeep( source ) // {a:1, obj: {b:1, obj: {c:1}}, arr:[{d:1, obj:{e:1}}]}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "src" subdirectory!_

## License
 Copyright (c) 2014 Denis. Licensed under the MIT license.
