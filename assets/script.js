// GIVEN I am using a daily planner to create a schedule WHEN I open the planner THEN the current day is displayed at the top of the calendar

$('#currentDay').text(moment().format('dddd, MMMM Do'));

// WHEN I scroll down THEN I am presented with time blocks for standard business hours
// WHEN I click into a time block THEN I can enter an event
const container = () => {

  $('.container').each(function () {

    $(this).append('<div id="hour09" class="row time-block past present future"><div class="col-md-1 hour">9 AM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');
    $(this).append('<div id="hour10" class="row time-block past present future"><div class="col-md-1 hour">10 AM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');
    $(this).append('<div id="hour11" class="row time-block past present future"><div class="col-md-1 hour">11 AM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');
    $(this).append('<div id="hour12" class="row time-block past present future"><div class="col-md-1 hour">12 AM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');
    $(this).append('<div id="hour13" class="row time-block past present future"><div class="col-md-1 hour">1 PM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');
    $(this).append('<div id="hour14" class="row time-block past present future"><div class="col-md-1 hour">2 PM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');
    $(this).append('<div id="hour15" class="row time-block past present future"><div class="col-md-1 hour">3 PM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');
    $(this).append('<div id="hour16" class="row time-block past present future"><div class="col-md-1 hour">4 PM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');
    $(this).append('<div id="hour17" class="row time-block past present future"><div class="col-md-1 hour">5 PM</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>');

  });

}

container();


// WHEN I view the time blocks for that day THEN each time block is color - coded to indicate whether it is in the * past, present, or future
const trackTime = () => {

  let currentTime = moment().hour();

  $('.time-block').each(function () {

    let block = parseInt($(this).attr('id').split('hour')[1]);

    if (block === currentTime) {
      $(this).removeClass('past');
      $(this).addClass('present');
      $(this).removeClass('future');

    } else if (block < currentTime) {
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');

    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })
}

trackTime();

// WHEN I click the save button for that time block THEN the text for that event is saved in local storage

$('.saveBtn').on('click', function () {

  let textArea09 = $("textarea")[0].value;
  let textArea10 = $("textarea")[1].value;
  let textArea11 = $("textarea")[2].value;
  let textArea12 = $("textarea")[3].value;
  let textArea13 = $("textarea")[4].value;
  let textArea14 = $("textarea")[5].value;
  let textArea15 = $("textarea")[6].value;
  let textArea16 = $("textarea")[7].value;
  let textArea17 = $("textarea")[8].value;

  localStorage.setItem("textArea09", textArea09);
  localStorage.setItem("textArea10", textArea10);
  localStorage.setItem("textArea11", textArea11);
  localStorage.setItem("textArea12", textArea12);
  localStorage.setItem("textArea13", textArea13);
  localStorage.setItem("textArea14", textArea14);
  localStorage.setItem("textArea15", textArea15);
  localStorage.setItem("textArea16", textArea16);
  localStorage.setItem("textArea17", textArea17);

})


// WHEN I refresh the page THEN the saved events persist
$(window).on('load', function () {

  $("textarea")[0].value = localStorage.getItem("textArea09");
  $("textarea")[1].value = localStorage.getItem("textArea10");
  $("textarea")[2].value = localStorage.getItem("textArea11");
  $("textarea")[3].value = localStorage.getItem("textArea12");
  $("textarea")[4].value = localStorage.getItem("textArea13");
  $("textarea")[5].value = localStorage.getItem("textArea14");
  $("textarea")[6].value = localStorage.getItem("textArea15");
  $("textarea")[7].value = localStorage.getItem("textArea16");
  $("textarea")[8].value = localStorage.getItem("textArea17");

})