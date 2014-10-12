/*! extobj - v0.1.2 - 2014-10-12
* https://github.com/Pofigizm/extobj
* Copyright (c) 2014 Denis; Licensed MIT */
( function( ){
  'use strict';

  function _assignDeepFull( target, cleararray ){

    if( target === undefined || target === null )
      throw new TypeError( "Cannot convert first argument to object" );

    if( typeof cleararray !== 'boolean' )
      throw new TypeError( "Cannot convert second argument to boolean" );

    var to = Object( target );
    var hasexception = false;
    var exception;

    for( var i = 2; i < arguments.length; i++ ){
      var source = arguments[ i ];
      if( source === undefined || source === null ) continue;
      var keys = Object.keys( Object( source ) );

      for( var key in keys ){
        var next = keys[ key ];
        try {

          var desc = Object.getOwnPropertyDescriptor( source, next );
          if( typeof desc.value === 'object' ){

            if( !to.hasOwnProperty( next ) )
              to[ next ] = new source[ next ].__proto__.constructor( );

            if( typeof to[ next ] !== 'object' ) {

              var value = to[ next ];
              to[ next ] = new source[ next ].__proto__.constructor( );
              to[ next ].value = value;

            } else {

              if( cleararray  && to[ next ].length > 0 )
                to[ next ].length = 0;

              to[ next ].__proto__ = source[ next ].__proto__;

            }
            _assignDeepFull( to[ next ], cleararray, source[ next ] );

          } else {

            if( desc !== undefined && desc.enumerable )
              to[ next ] = source[ next ];
          }

        } catch( e ){
          if( !hasexception ){
            hasexception = true;
            exception = e;
          }
        }
      }

      if( hasexception ) 
        throw exception;
    }
    return to;
  }

  function _createDeep( proto ){

    if( proto === undefined || proto === null )
      throw new TypeError( "Cannot convert first argument to object" );

    var to = Object.create( proto );
    var hasexception = false;
    var exception;

    var source = arguments[ 1 ];
    if( source === undefined || source === null ) return to;
    
    if( source.__proto__ === Array.prototype ){
      to = [ ];
      to.__proto__ = proto;
    }

    var keys = Object.keys( Object( source ) );

    for( var key in keys ){
      var next = keys[ key ];
      try {

        var desc = Object.getOwnPropertyDescriptor( source, next );
        if( typeof desc.value === 'object' ){

          to[ next ] = _createDeep( to, desc.value );

        } else {

          if( desc !== undefined && desc.enumerable )
            to[ next ] = source[ next ];
        }

      } catch( e ){
        if( !hasexception ){
          hasexception = true;
          exception = e;
        }
      }

      if( hasexception ) 
        throw exception;
    }
    return to;
  }

  if( !Object.assignDeep ){
    Object.defineProperty( Object, "assignDeep", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function( target ){
        // call _assignDeepFull with insert true to second arguments position 
        return _assignDeepFull.apply( this, [ target, true ].concat( 
          Array.prototype.slice.call( arguments, 1 ) ) );
      }
    } );
  }

  if( !Object.assignDeepArray ){
    Object.defineProperty( Object, "assignDeepArray", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function( target ){
        // call _assignDeepFull with insert false to second arguments position 
        return _assignDeepFull.apply( this, [ target, false ].concat( 
          Array.prototype.slice.call( arguments, 1 ) ) );
      }
    } );
  }

  if( !Object.createDeep ){
    Object.defineProperty( Object, "createDeep", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function( proto, source ){
        return _createDeep( proto, source );
      }
    } );
  }

  if( !Object.cloneDeep ){
    Object.defineProperty( Object, "cloneDeep", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function( source ){
        var empty = source instanceof Array ? [ ] : { };
        return _assignDeepFull( empty, true, source );
      }
    } );
  }

} )( );
