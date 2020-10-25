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

  let textArea1 = $("textarea")[0].value;
  let textArea2 = $("textarea")[1].value;
  let textArea3 = $("textarea")[2].value;
  let textArea4 = $("textarea")[3].value;
  let textArea5 = $("textarea")[4].value;
  let textArea6 = $("textarea")[5].value;
  let textArea7 = $("textarea")[6].value;
  let textArea8 = $("textarea")[7].value;
  let textArea9 = $("textarea")[8].value;

  localStorage.setItem("textarea1", textArea1);
  localStorage.setItem("textarea2", textArea2);
  localStorage.setItem("textarea3", textArea3);
  localStorage.setItem("textarea4", textArea4);
  localStorage.setItem("textarea5", textArea5);
  localStorage.setItem("textarea6", textArea6);
  localStorage.setItem("textarea7", textArea7);
  localStorage.setItem("textarea8", textArea8);
  localStorage.setItem("textarea9", textArea9);

})


// WHEN I refresh the page THEN the saved events persist
$(window).on('load', function () {

  $("textarea")[0].value = localStorage.getItem("textarea1");
  $("textarea")[1].value = localStorage.getItem("textarea2");
  $("textarea")[2].value = localStorage.getItem("textarea3");
  $("textarea")[3].value = localStorage.getItem("textarea4");
  $("textarea")[4].value = localStorage.getItem("textarea5");
  $("textarea")[5].value = localStorage.getItem("textarea6");
  $("textarea")[6].value = localStorage.getItem("textarea7");
  $("textarea")[7].value = localStorage.getItem("textarea8");
  $("textarea")[8].value = localStorage.getItem("textarea9");

})