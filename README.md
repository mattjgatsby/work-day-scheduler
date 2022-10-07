# work-day-scheduler

# About
This simple project was put together in order to keep track of your hourly tasks throughout a 9-5 work day. I put this together to practice localStorage and utilizing bootstrap to make html elements.

# Vist the site!

![site image](./assets/images/Work%20Day%20Scheduler.gif)

# Code Snippet
Here is an example of some code I used. This code is in JavaScript and is used to apply custom css classes to elements I dynamicly created.
````
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
  ````
# Author Info
[GitHub](https://github.com/mattjgatsby)
[LinkedIn](https://www.linkedin.com/in/matthew-gatsby-1a1521250/)