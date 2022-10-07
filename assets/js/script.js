$(document).ready(function () {
  var today = moment();

//this function is a click event that takes a var value  and var idHours to set the 
//localstorage as the id of hours and the value of the user input
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();

    var idHours = $(this).parent().attr("id");

    localStorage.setItem(idHours, value);
  });
//Here I connected the id of currentDay to moment.js with the format of Oct 6th, 2022.
  $("#currentDay").text(today.format("MMM Do, YYYY"));
  //this function takes in the current time which is equal to moment().hours().
  //and compares it to a var targetTime in order to add classes associated with the custom CSS.
  function updateHour() {
    var currentTime = moment().hours();
    $(".time-block").each(function () {
      var targetTime = parseInt($(this).attr("id").split("-")[1]);

      if (targetTime < currentTime) {
        $(this).addClass("past");
      } else if (targetTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  //this setInterval keeps the hours updated every 15 seconds
  updateHour();
  var interval = setInterval(updateHour, 15000);
});
//this is a way to grab the information stored in localstorage.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
