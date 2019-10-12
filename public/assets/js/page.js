$(".create").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
    burger_name: $("#burger").val().trim(),
    devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
    }).then(
    function(data) {
        console.log("Added Burger");
    }
    );
});