$.getJSON( "https://data.cityofchicago.org/resource/cwig-ma7x.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

function getData () {
        var baseUrl = "https://data.cityofchicago.org/resource/cwig-ma7x.json";
        var formData = {}, parameterString;
        
        $("input,select").each(function() {
          formData[$(this).attr("id")] = $(this).val();
        });
  $(function() {
  // Handle click collapse and expand function on click
  $('.tree-div').click(function() {
    $(this).next().toggleClass('tree-open');
  }); 
  // Handle filter function
  $('.search-input').keyup(function() {
    var filter_text = $(this).val();
    // If user input is not null
    if(filter_text) {
      // Iterate through all branches
      $('.tree-li-ul').each(function() {
        // Initiate match flag to false for this branch
        var match_flag = false
        // Iterate through all items within one branch
        $(this).children().each(function() {
          // If user input matches this item
          if($(this).children().text().toLowerCase().indexOf(filter_text) >= 0) {
            // Set match_flag for this branch to true
            match_flag = true;
            // Expand this branch
            $(this).parent().addClass('tree-open');
            // Show this item
            $(this).slideDown();
          } 
          // If user input doesn't match this item
          else {
            // Hide this item
            $(this).slideUp();
            // If user input doesn't match any item in this branch, collapse this branch
            if(!match_flag) $(this).parent().parent().removeClass('tree-open');
          }
        });
      });
    } 
    // If user input is null
    else {
      // Hide all the branches
      $('.tree-li-ul').removeClass('tree-open');
      // Show all items
      $('.tree-li-ul-li').slideDown();
    }
  });
});