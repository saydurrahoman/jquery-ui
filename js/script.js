
$(document).ready(function(){
  // Draggable start
  $( "#dragg" ).draggable();

    // Draggable start-2
  $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // Resizable
    $( "#resizable" ).resizable();

    // Selectable
    $( "#selectable" ).selectable();
    // Sortable
    $( "#sortable" ).sortable();
    // Accordion
    $( "#accordion" ).accordion();
    // Autocomplete
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    // Controlgroup
    $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });

    $( "#datepicker" ).datepicker();
    // Menu
    $( "#menu" ).menu();


    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
    // selcmenu
    $( "#salutation" ).selectmenu();
    // slider
    $( "#slider" ).slider();

    // Run Effect

    $( ".c_button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }

    // Animate start
    var state = true;
    $( ".a_cus" ).on( "click", function() {
      if ( state ) {
        $( "#effect_2" ).animate({
          backgroundColor: "#003580",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect_2" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 3000 );
      }
      state = !state;
    });
    // show hide
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect_3" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect_3:visible" ).removeAttr( "style" ).fadeOut();
      }, 3000 );
    };
 
    // Set effect from select menu value
    $( ".custom_button" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect_3" ).hide();

    // tabnav
    $( "#tabs" ).tabs();
});