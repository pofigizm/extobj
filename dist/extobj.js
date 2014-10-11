/*! extobj - v0.1.1 - 2014-10-11
* https://github.com/Pofigizm/extobj
* Copyright (c) 2014 Denis; Licensed MIT */
( function( ){
  'use strict';

  if( !Object.assignDeep ){
    Object.defineProperty( Object, "assignDeep", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function( target, cleararray ){

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
                Object.assignDeep( to[ next ], cleararray, source[ next ] );

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
    } );
  }

  if( !Object.createDeep ){
    Object.defineProperty( Object, "createDeep", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function( proto ){

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

              to[ next ] = Object.createDeep( to, desc.value );

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
    } );
  }

  if( !Object.cloneDeep ){
    Object.defineProperty( Object, "cloneDeep", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function( source ){

        var empty;
        if( source.__proto__ === Array.prototype ){
          empty = [ ];
        } else {
          empty = { };
        }
        return Object.assignDeep( empty, true, source );
      }
    } );
  }

} )( );
