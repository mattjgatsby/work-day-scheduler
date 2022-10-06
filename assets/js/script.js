// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
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
