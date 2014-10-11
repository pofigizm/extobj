# extobj.js
[en]
extobj.js extend standart Object with two methods assignDeep and createDeep.

My methods works recursivity as standart methods (assign and create) to all levels of object, including array.
`assignDeep` return self first argument with overridden value and methots from last to third arguments. If second arguments is true then all array in first argument will be cleaned before.
`createDeep` return new object cloned from second arguments with setuped prototype to first arguments. Also on each down object will be setuped prototype to upper object.      

[rus]
extobj.js расширяет стандартный Object двумя методами assignDeep и createDeep.

Мои методы делают тоже что и стандартные (assign and create) только рекурсивно ко всем уровням обьекта, включаяя массивы.
`assignDeep` возвращает свой первый аргумент с переопределенными значениями и методами из обьектов с последнего до третьего аргумента. Если второй аргумент true тогда все масивы будут сначала очищенны.
`createDeep` возвращает новый обьект клонированный от второго аргумента с установленным прототипом на первый аргумент. Также на каждый внутрениий обьект будет установлен прототип на верхний обьект.

## Getting Started
### On the server
Install the module with: // `npm install extobj` comming soon

```javascript
require('extobj');
// Object.assignDeep( )
var resObject = Object.assignDeep( resObject, true /* clean array */, fromObject [, andObject [, ...] ] );
// Object.createDeep( )
var resObject = Object.createDeep( protoObject, fromObject );
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/Pofigizm/extobj/master/dist/extobj.min.js
[max]: https://raw.github.com/Pofigizm/extobj/master/dist/extobj.js

In your web page:

```html
<script src="dist/extobj.min.js"></script>
<script>
// Object.assignDeep( )
var resObject = Object.assignDeep( resObject, true /* clean array */, fromObject );
// Object.createDeep( )
var resObject = Object.createDeep( protoObject, fromObject );
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
 Copyright (c) 2014 Denis. Licensed under the MIT license.