let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

const hour1 = $('#time1').text();
const hour2 = $('#time2').text();
const hour3 = $('#time3').text();
const hour4 = $('#time4').text();
const hour5 = $('#time5').text();
const hour6 = $('#time6').text();
const hour7 = $('#time7').text();
const hour8 = $('#time8').text();
const hour9 = $('#time9').text();
const hour10 = $('#time10').text();
const hour11 = $('#time11').text();
const hour12 = $('#time12').text();
const hour13 = $('#time13').text();
const hour14 = $('#time14').text();
const hour15 = $('#time15').text();
const hour16 = $('#time16').text();
const hour17 = $('#time17').text();
const hour18 = $('#time18').text();
const hour19 = $('#time19').text();
const hour20 = $('#time20').text();
const hour21 = $('#time21').text();
const hour22 = $('#time22').text();
const hour23 = $('#time23').text();
const hour24 = $('#time24').text();

const hour1Int = parseInt(hour1);
const hour2Int = parseInt(hour2);
const hour3Int = parseInt(hour3);
const hour4Int = parseInt(hour4);
const hour5Int = parseInt(hour5);
const hour6Int = parseInt(hour6);
const hour7Int = parseInt(hour7);
const hour8Int = parseInt(hour8);
const hour9Int = parseInt(hour9);
const hour10Int = parseInt(hour10);
const hour11Int = parseInt(hour11);
const hour12Int = parseInt(hour12);
const hour13Int = parseInt(hour13);
const hour14Int = parseInt(hour14);
const hour15Int = parseInt(hour15);
const hour16Int = parseInt(hour16);
const hour17Int = parseInt(hour17);
const hour18Int = parseInt(hour18);
const hour19Int = parseInt(hour19);
const hour20Int = parseInt(hour20);
const hour21Int = parseInt(hour21);
const hour22Int = parseInt(hour22);
const hour23Int = parseInt(hour23);
const hour24Int = parseInt(hour24);

// Store user input in local Storage
$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }
  const hour1String = JSON.stringify(hour1);
  localStorage.setItem(hour1, $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }
  const hour2String = JSON.stringify(hour2);
  localStorage.setItem(hour2, $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }
  const hour3String = JSON.stringify(hour3);
  localStorage.setItem(hour3, $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }
  const hour4String = JSON.stringify(hour4);
  localStorage.setItem(hour4, $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }
  const hour5String = JSON.stringify(hour5);
  localStorage.setItem(hour5, $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }
  const hour6String = JSON.stringify(hour6);
  localStorage.setItem(hour6, $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }
  const hour7String = JSON.stringify(hour7);
  localStorage.setItem(hour7, $('#text7').val());
})

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }
  const hour8String = JSON.stringify(hour8);
  localStorage.setItem("text8", $('#text8').val());
})

$('#btn9').click(function() { 
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }
  const hour9String = JSON.stringify(hour9);
  localStorage.setItem(hour9, $('#text9').val());
})

$('#btn10').click(function() { 
  if($('#text10').val()) {
    localStorage.removeItem('text10');
  }
  const hour10String = JSON.stringify(hour10);
  localStorage.setItem(hour10, $('#text10').val());
})

$('#btn11').click(function() { 
  if($('#text11').val()) {
    localStorage.removeItem('text11');
  }
  const hour11String = JSON.stringify(hour11);
  localStorage.setItem(hour11, $('#text11').val());
})

$('#btn12').click(function() { 
  if($('#text12').val()) {
    localStorage.removeItem('text12');
  }
  const hour12String = JSON.stringify(hour12);
  localStorage.setItem(hour12, $('#text12').val());
})

$('#btn13').click(function() { 
  if($('#text13').val()) {
    localStorage.removeItem('text13');
  }
  const hour13String = JSON.stringify(hour13);
  localStorage.setItem(hour13, $('#text13').val());
})

$('#btn14').click(function() { 
  if($('#text14').val()) {
    localStorage.removeItem('text14');
  }
  const hour14String = JSON.stringify(hour14);
  localStorage.setItem(hour14, $('#text14').val());
})

$('#btn15').click(function() { 
  if($('#text15').val()) {
    localStorage.removeItem('text15');
  }
  const hour15String = JSON.stringify(hour15);
  localStorage.setItem(hour15, $('#text15').val());
})

$('#btn16').click(function() { 
  if($('#text16').val()) {
    localStorage.removeItem('text16');
  }
  const hour16String = JSON.stringify(hour16);
  localStorage.setItem(hour16, $('#text16').val());
})

$('#btn17').click(function() { 
  if($('#text17').val()) {
    localStorage.removeItem('text17');
  }
  const hour17String = JSON.stringify(hour17);
  localStorage.setItem(hour17, $('#text17').val());
})

$('#btn18').click(function() { 
  if($('#text18').val()) {
    localStorage.removeItem('text18');
  }
  const hour18String = JSON.stringify(hour18);
  localStorage.setItem(hour18, $('#text18').val());
})

$('#btn19').click(function() { 
  if($('#text19').val()) {
    localStorage.removeItem('text19');
  }
  const hour19String = JSON.stringify(hour19);
  localStorage.setItem(hour19, $('#text19').val());
})

$('#btn20').click(function() { 
  if($('#text20').val()) {
    localStorage.removeItem('text20');
  }
  const hour20String = JSON.stringify(hour20);
  localStorage.setItem(hour20, $('#text20').val());
})

$('#btn21').click(function() { 
  if($('#text21').val()) {
    localStorage.removeItem('text21');
  }
  const hour21String = JSON.stringify(hour21);
  localStorage.setItem(hour21, $('#text21').val());
})

$('#btn22').click(function() { 
  if($('#text22').val()) {
    localStorage.removeItem('text22');
  }
  const hour22String = JSON.stringify(hour22);
  localStorage.setItem(hour22, $('#text22').val());
})

$('#btn23').click(function() { 
  if($('#text23').val()) {
    localStorage.removeItem('text23');
  }
  const hour23String = JSON.stringify(hour23);
  localStorage.setItem(hour23, $('#text23').val());
})

$('#btn24').click(function() { 
  if($('#text24').val()) {
    localStorage.removeItem('text24');
  }
  const hour24String = JSON.stringify(hour24);
  localStorage.setItem(hour24, $('#text24').val());
})

// Display the time using moment.js

$('#currentDay').append(timeNow);

// Color coding to reflect whether the time slot is in the past, the present or the future 
colorCoding();
function colorCoding() {
  TIMER = setInterval(colorCoding, 1000);
  // Test check: hourNow24 = 20;
  if(hourNow24 >= 0 && hourNow24 <= 24) {

    for (let i = 1; i <= 24; i++) { 
     let hourInInt = i;

      if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', '#FB8F78');
        continue;
      }
      
      if (hourInInt < hourNow24) {
        $('#text'+i).css('background-color', 'lightgray');
      } else {
          $('#text'+i).css('background-color', 'lightgreen');
      }
    }
  } else {
      clearInterval(TIMER);
      $('textarea').css('background-color', 'pink');
  }
}