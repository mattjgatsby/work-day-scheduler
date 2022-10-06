
$(document).ready(function () {
  var today = moment();

  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();

    var idHours = $(this).parent().attr("id");

    localStorage.setItem(idHours, value);
  });

  $("#currentDay").text(today.format("MMM Do, YYYY"));
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
  updateHour();
  var interval = setInterval(updateHour, 15000);
});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
