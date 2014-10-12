'use strict';

var extobj = require('../src/extobj.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['Testing_etobj'] = {

  setUp: function(done) {
    done();
  },

  'assignDeep': function(test) {
    test.expect(20);
    
    var target = {a:2};
    var source = {a:{a:{a:1}},c:[{a:1}]};
    test.strictEqual( Object.assignDeep( target, source ), target, 'dont lost link to target');

    test.ok( Object.assignDeep( {}, source ) !== source, 'dont link to source');
    test.ok( Object.assignDeep( {}, source ).a !== source.a, 'dont link to source.a');
    test.ok( Object.assignDeep( {}, source ).a.a !== source.a.a, 'dont link to source.a.a');
    test.ok( Object.assignDeep( {}, source ).c !== source.c, 'dont link to source.c');

    test.equal( Object.assignDeep( {a:2}, source.a.a ).a, 1, 'override first level');
    test.equal( Object.assignDeep( {a:{a:2}}, source.a ).a.a, 1, 'override second level');
    test.equal( Object.assignDeep( {a:{a:{a:2}}}, source ).a.a.a, 1, 'override third level');

    test.equal( Object.assignDeep( {a:{},b:2,c:[{a:2},{a:2}]}, source ).c[0].a, 1, 'insert in array level');
    test.equal( Object.assignDeep( {a:{},b:2,c:[{a:2},{a:2}]}, source ).c[1], undefined, 'clean array level');

    test.equal( Object.assignDeep( {a:{a:{a:2,b:2},b:2},b:2}, source ).b, 2, 'save first level value');
    test.equal( Object.assignDeep( {a:{a:{a:2,b:2},b:2},b:2}, source ).a.b, 2, 'save second level value');
    test.equal( Object.assignDeep( {a:{a:{a:2,b:2},b:2},b:2}, source ).a.a.b, 2, 'save third level value');

    test.notStrictEqual( Object.assignDeep( {a:1}, {b:1}, {c:1}, {d:1} ), {a:1, b:1, c:1, d:1 }, 'many objects, different property');
    test.notStrictEqual( Object.assignDeep( {a:1}, {a:2, b:1}, {a:3, c:1} ), {a:3, b:1, c:1}, 'many objects, identical property');
    test.notStrictEqual( Object.assignDeep( {a:1}, {b:[1,2,3,4,5]}, {b:[6,7,8]} ), {a:1, b:[6,7,8]}, 'many objects, array in property');

    var arr = [6,7,8];
    test.ok( Object.assignDeep( {a:1}, {b:[1,2,3,4,5]}, {b:arr} ).b !== arr, 'many objects, array in property, dont link to arr');

    test.throws( Object.assignDeep( {a:1}, null ) );
    test.throws( Object.assignDeep( {a:1}, undefined ) );
    test.throws( Object.assignDeep( {a:1}, "" ) );

    test.done();
  },

  'assignDeepArray': function(test) {
    test.expect(20);
    
    var target = {a:2};
    var source = {a:{a:{a:1}},c:[{a:1}]};
    test.strictEqual( Object.assignDeepArray( target, source ), target, 'dont lost link to target');

    test.ok( Object.assignDeepArray( {}, source ) !== source, 'dont link to source');
    test.ok( Object.assignDeepArray( {}, source ).a !== source.a, 'dont link to source.a');
    test.ok( Object.assignDeepArray( {}, source ).a.a !== source.a.a, 'dont link to source.a.a');
    test.ok( Object.assignDeepArray( {}, source ).c !== source.c, 'dont link to source.c');

    test.equal( Object.assignDeepArray( {a:2}, source.a.a ).a, 1, 'override first level');
    test.equal( Object.assignDeepArray( {a:{a:2}}, source.a ).a.a, 1, 'override second level');
    test.equal( Object.assignDeepArray( {a:{a:{a:2}}}, source ).a.a.a, 1, 'override third level');

    test.equal( Object.assignDeepArray( {a:{},b:2,c:[{a:2},{a:2}]}, source ).c[0].a, 1, 'insert in array level');
    test.equal( Object.assignDeepArray( {a:{},b:2,c:[{a:2},{a:2}]}, source ).c[1].a, 2, 'save array level');

    test.equal( Object.assignDeepArray( {a:{a:{a:2,b:2},b:2},b:2}, source ).b, 2, 'save first level value');
    test.equal( Object.assignDeepArray( {a:{a:{a:2,b:2},b:2},b:2}, source ).a.b, 2, 'save second level value');
    test.equal( Object.assignDeepArray( {a:{a:{a:2,b:2},b:2},b:2}, source ).a.a.b, 2, 'save third level value');

    test.notStrictEqual( Object.assignDeepArray( {a:1}, {b:1}, {c:1}, {d:1} ), {a:1, b:1, c:1, d:1 }, 'many objects, different property');
    test.notStrictEqual( Object.assignDeepArray( {a:1}, {a:2, b:1}, {a:3, c:1} ), {a:3, b:1, c:1}, 'many objects, identical property');
    test.notStrictEqual( Object.assignDeepArray( {a:1}, {b:[1,2,3,4,5]}, {b:[6,7,8]} ), {a:1, b:[6,7,8,4,5]}, 'many objects, array in property');

    var arr = [6,7,8];
    test.ok( Object.assignDeepArray( {a:1}, {b:[1,2,3,4,5]}, {b:arr} ).b !== arr, 'many objects, array in property, dont link to arr');

    test.throws( Object.assignDeepArray( {a:1}, null ) );
    test.throws( Object.assignDeepArray( {a:1}, undefined ) );
    test.throws( Object.assignDeepArray( {a:1}, "" ) );

    test.done();
  },

  'createDeep': function(test) {
    test.expect(16);
    
    var proto = {value:123};
    var source = {a:1, obj: {b:1, obj: {c:1}}, arr:[{d:1, obj:{e:1}}]};

    test.notStrictEqual( Object.createDeep( proto, source ), source, 'good clone');
    
    test.equal( Object.createDeep( proto, source ).__proto__, proto, 'prototype');
    
    test.ok( Object.createDeep( proto, source ) !== source, 'dont link to source');
    test.ok( Object.createDeep( proto, source ).obj !== source.obj, 'dont link to source.a');
    test.ok( Object.createDeep( proto, source ).obj.obj !== source.obj.obj, 'dont link to source.a.a');
    test.ok( Object.createDeep( proto, source ).arr !== source.arr, 'dont link to source.c');

    test.equal( Object.createDeep( proto, source ).value, 123, 'first level');
    test.equal( Object.createDeep( proto, source ).obj.value, 123, 'second level');
    test.equal( Object.createDeep( proto, source ).obj.obj.value, 123, 'third level');
    test.equal( Object.createDeep( proto, source ).arr.value, 123, 'array level');
    test.equal( Object.createDeep( proto, source ).arr[0].value, 123, 'first in array level');
    test.equal( Object.createDeep( proto, source ).arr[0].obj.value, 123, 'second in array level');

    var arr = [6,7,8];
    test.ok( Object.createDeep( proto, {a:1, b:arr} ).b !== arr, 'array in property, dont link to arr');

    test.throws( Object.createDeep( proto, null ) );
    test.throws( Object.createDeep( proto, undefined ) );
    test.throws( Object.createDeep( proto, "" ) );

    test.done();
  },  

  'cloneDeep': function(test) {
    test.expect(13);
    
    var source = {a:{a:{a:1}},c:[{a:1}]};

    test.ok( Object.cloneDeep( source ) !== source, 'dont link to source');
    test.ok( Object.cloneDeep( source ).a !== source.a, 'dont link to source.a');
    test.ok( Object.cloneDeep( source ).a.a !== source.a.a, 'dont link to source.a.a');
    test.ok( Object.cloneDeep( source ).c !== source.c, 'dont link to source.c');

    test.equal( Object.cloneDeep( source.a.a ).a, 1, 'first level');
    test.equal( Object.cloneDeep( source.a ).a.a, 1, 'second level');
    test.equal( Object.cloneDeep( source ).a.a.a, 1, 'third level');

    test.equal( Object.cloneDeep( source ).c[0].a, 1, 'array level');
    test.notStrictEqual( Object.cloneDeep( {a:1, b:[1,2,3,4,5]} ), {a:1, b:[1,2,3,4,5]}, 'array in property');

    var arr = [6,7,8];
    test.ok( Object.cloneDeep( {a:1, b:arr} ).b !== arr, 'array in property, dont link to arr');

    test.throws( Object.cloneDeep( null ) );
    test.throws( Object.cloneDeep( undefined ) );
    test.throws( Object.cloneDeep( "" ) );

    test.done();
  }  
};
