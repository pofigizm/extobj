# extobj.js
###[en]
`extobj.js` extend standard Object with two methods assignDeep and createDeep, which works recursively as standard methods (assign and create) to all levels of object, including array.

`assignDeep` return self first argument with overridden value and methods from last to third arguments. If second arguments is true then all array in first argument will be cleaned before.

`createDeep` return new object cloned from second arguments with set prototype to first arguments. Also on each down object will be set prototype to upper object.

###[rus]
`extobj.js` расширяет стандартный Object двумя методами assignDeep и createDeep.

Мои методы делают тоже что и стандартные (assign и create) только рекурсивно ко всем уровням обьекта, включаяя массивы.

`assignDeep` возвращает свой первый аргумент с переопределенными значениями и методами из обьектов с последнего до третьего аргумента. Если второй аргумент true тогда все масивы будут сначала очищенны.

`createDeep` возвращает новый обьект клонированный от второго аргумента с установленным прототипом на первый аргумент. Также на каждый внутрениий обьект будет установлен прототип на верхний обьект.

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
var result = Object.assignDeep( result, true /* clean array */, from [, andfrom ] );

// Object.createDeep( )
var resObject = Object.createDeep( protoObject, fromObject );
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
var result = Object.assignDeep( result, true /* clean array */, from [, andfrom ] );

// Object.createDeep( )
var result = Object.createDeep( proto, from );
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
