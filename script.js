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
     function colorUpdater () {
     // create a variable that holds the current time value
        var currentHour = moment().hours();
        console.log(currentHour);
     // loop over the timebloacks
     $(".time-block").each(function() {
        //create something to loop over the time block
         var blockTime = $(this).children(".hour")[0];
         console.log(blockTime);
       
        // conditional statement to check the hurs and apply correct time 

       if (blockTime < currentHour) {
           $(this).child(".hour").sibling("textarea").addClass("past");
       } else if (blockTime > currentHour) {
        $(this).child(".hour").sibling("textarea").addClass("future");
       } else {
        $(this).child(".hour").sibling("textarea").addClass("present");

       }
       //call the function
        colorUpdater();
       // keep time updated
        var interval = setInterval(colorUpdater,15000);
       //need saved data from local storage
        $("#hour-nine .information").val(localStorage.getItem("hour-nine"));
        $("#hour-ten .information").val(localStorage.getItem("hour-ten"));
        $("#hour-eleven .information").val(localStorage.getItem("hour-eleven"));
        $("#hour-twelve .information").val(localStorage.getItem("hour-twelve"));
        $("#hour-thirteen .information").val(localStorage.getItem("hour-thrteen"));
        $("#hour-fourteen .information").val(localStorage.getItem("hour-fourteen"));
        $("#hour-fifteen .information").val(localStorage.getItem("hour-fifteen"));
        $("#hour-sixteen .information").val(localStorage.getItem("hour-sixteen"));
        $("#hour-seventeen .information").val(localStorage.getItem("hour-seventeen"));


        $("#currentDay").text(moment().format("MMM Do YYYY"));


    } 

     )};
 
    
 

})


    
    




