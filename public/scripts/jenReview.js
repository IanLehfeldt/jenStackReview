console.log( 'js sourced' );

$( document ).ready( function(){
  console.log( 'JQ' );

  $( '#mort' ).on( 'click', function(){
    console.log( 'mort here... wuzap?' );
    // assemble the objectToSend
    var objectToSend = {
      mort: 'mort'
    };
    // ajax call to mort route
    $.ajax({
      type: 'POST',
      url: '/mort',
      data: objectToSend,
      success: function( data ){
        console.log( 'successful ajax call:', data );
      }
    }); // end ajax
  }); // end mort click
}); // end doc ready
