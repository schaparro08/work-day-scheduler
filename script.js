// Setting the time in the header
var time = moment().format("MMM Do YYYY, h:mm:ss a")
// var time = moment().format("MMM Do YYYY")
$("#currentDay").text(time);

//begin a function using jQuery syntax
$(document).ready(function(){
//listen for save button clicks
    $(".saveBtn").on("click", function() {

        //show notification that the item was saved in local storage
        //more code for this item's styling
        var value = $(this).sibling(".informtion").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    })

// function to update the current hour and chage the colors of the time blocks



})