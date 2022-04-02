// Add a current day to the top of the calendar
var current = moment().format('dddd MMMM DD, YYYY');

function setDate () {
    var now = document.getElementById("currentDay");
    now.textContent=current;
}
setDate();
// Create timeblock for the current day standard business hours (8 am to 5 pm  )
// Color code the blocks based on past, present and future
// Enable adding events to the calendar
// Add an event button to to save any changes added to the calendar
// When refreshed all changes are saved to
console.log(current)
$(".description").each(function(){
    var rightnow = moment().hour();
   
    var timeblock =parseInt($(this).parent().attr("id"));
    console.log(timeblock);
    if(timeblock===rightnow){
        $(this).addClass("present");
        // console.log("present")
    }
    else if(timeblock>rightnow){
        $(this).addClass("future");
        // console.log("future")
    }
    else {
        $(this).addClass("past")
        // console.log("past")
    }
})
$(".saveBtn").on("click", function(){
    var task = $(this).siblings(".description").val();
    console.log(task);
    localStorage.setItem("task",task);
}) 

$(".description").each(function(){
    var timeblock = $(this).parent().attr("id");
    $("#9 .description").val(localStorage.getItem("task"));

})