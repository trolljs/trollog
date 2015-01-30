if ( typeof window !== 'undefined' ) {
  console.log = window.alert.bind( window );
}