// Add a current day to the top of the calendar using moment API
var current = moment().format('dddd MMMM DD, YYYY LT');

function setDate () {
    var now = document.getElementById("currentDay");
    now.textContent=current;
}
setDate();

// create conditional function to access the timeblock event color
$(".description").each(function(){
    var rightnow = moment().hour();
//var rightnow to define current time vs future&present
    var timeblock =parseInt($(this).parent().attr("id"));
// parseInt used to covert id#9 to interger to compare to current time
    if(timeblock===rightnow){
        $(this).addClass("present");
// if timeblock and right now are equal then link the present class styling
    }
    else if(timeblock>rightnow){
        $(this).addClass("future");
 // if timeblock is greater than right now link the future class styling    
    }
    else {
        $(this).addClass("past")
// for any other option use past styling 
    }
})
$(".saveBtn").on("click", function(){
    var task = $(this).siblings(".description").val();
    // console.log(task);
    localStorage.setItem("task",task);
}) 
// var task used to save the events entered in the local storage
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#9 .description").val(localStorage.getItem("task"));
// saves the event for each hour only in the specified timeblock
})
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#10 .description").val(localStorage.getItem("task"));
})
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#11 .description").val(localStorage.getItem("task"));
})
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#12 .description").val(localStorage.getItem("task"));
})
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#13 .description").val(localStorage.getItem("task"));
})
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#14 .description").val(localStorage.getItem("task"));
})
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#15 .description").val(localStorage.getItem("task"));
})
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#16 .description").val(localStorage.getItem("task"));
})
$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#17 .description").val(localStorage.getItem("task"));
})
