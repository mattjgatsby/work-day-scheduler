// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
var today = moment();

$("#currentDay").text(today.format("MMM Do, YYYY"));

$(".time-block").each(function(){
    var currentTime = moment().hours();
    var targetTime = parseInt($(this).attr("id"));

    if (targetTime === currentTime) {
        $(this).addclass("present");
    } else if (targetTime < currentTime) {
        $(this).addclass("past");
    } else {
        $(this).addclass("future");
    }
});