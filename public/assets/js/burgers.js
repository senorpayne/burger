
$(function(){
    $("#add").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    console.log("Working");
        var newBurger = {
          name: $("#burgername").val()
         
        };
    console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

})