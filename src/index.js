if ( typeof window !== 'undefined' ) {
	if(! window.console ) {
		console = { log: function(){} };
	}
  console.log = window.alert.bind( window );
}