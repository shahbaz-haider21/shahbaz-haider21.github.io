$(document).ready(function () {
    $('body').on("click", ".btn-add", function () {
        var value = $('#inputText').val();
        $('#inputText').val('');  //clear input value
        $('.container ul').append('<li class="listItem">' + value + ' <button class="close">X</button></li>');

    })
    $(".container").on("click", ".close", function () {
        // $(this).hide()  // it will hide only the clicked item
        // $(this).parent().hide() //it will hide the parent of clicked item
        $(this).parent().remove()  //remove the immediate parent of clicked item
        // $(this).parents(".listItem").remove() //remove the parent who,s class is target
    });
    $(".container").on("click", ".listItem", function () {
        $(this).toggleClass("green");
    })
    $("#inputText").keydown(function (event) { 
        if (event.which == 13) { 
            event.preventDefault();
            $('.btn-add').click();   //to trigger click function on enter key
        } 
       });
})
