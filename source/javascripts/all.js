//= require jquery
//= require parsley


$(function() {
    $('#demo-form').parsley()

    .on('form:init', function() {
        .on('field:error', function() {
            alert("ERROR");
        });

    });
    .on('form:submit', function() {
        alert("Account Created");
        // In here, `this` is the parlsey instance of #some-input
    });

});