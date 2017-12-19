$(document).ready(function() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);    
  }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TOP LEVEL VARIABLE DECLARATIONS   
  const colorN = 'rgb(170, 170, 170)';  
  const color1 = $('.color-1').css('background-color');
  const color2 = $('.color-2').css('background-color');
  const color3 = $('.color-3').css('background-color');  
  const color4 = $('.color-4').css('background-color');  
  const color5 = $('.color-5').css('background-color');
  const color6 = $('.color-6').css('background-color');

  const color = [color1, color2, color3, color4, color5, color6];
  
  let bgColor = color1;
  let clickCount = 0;
  
  $('body').css('overflow-y', 'hidden');
  const vpWidth = $(window).width();
  
  $('body').css('overflow-y', 'visible');
  const vpHeight = $(window).height();

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // GAME BOARD POSITIONING
  const gameBoardWidth = $('#gameboard').outerWidth();
  if (vpWidth > 840) {
    const posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
    $('#color-selector').css('left', posColorSelector);
    const posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;
    $('#submit').css('right', posSubmitButton);
  }    
  if (vpWidth > 840) {
    const vpHeight = $(window).height();
    $('.rules-wrapper').css('height', vpHeight - 220);
  } else {
    const vpHeight = $(window).height();
    $('.rules-wrapper').css('height', vpHeight - 150);
  }
  if (vpWidth > 1000) {
    $('#timer').css('right', 80);
  } else if (vpWidth > 840) {
    $('#timer').css('right', 30);
  } else if (vpWidth <= 840 && vpWidth > 500) {    
    $('#timer').css('right', (vpWidth - gameBoardWidth) / 2);
  } else {
    $('#timer').css('right', 20);
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const makeCode = () => {
    let codeArray = [];
    for (let i = 0; i < 4; i++) {
      codeArray.push(Math.floor(Math.random() * 6));
    }
    return codeArray;
  }
  let codeArray = makeCode();
  // let codeArray = [0,0,0,0];  

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  $('#color-selector .cdBkr-spot').click(function() {
    $('#color-selector .cdBkr-spot').css('border-width', '2px');
    $('#color-selector .cdBkr-spot').removeClass('selected');
    $(this).css('border-width', '6px');
    $(this).addClass('selected');
    bgColor = $('#color-selector .cdBkr-spot.selected').css('background-color');        
  });

  const showSubmit = () => {
    if ($('.row.active .cdBkr-spot-1').hasClass('guess-made')
    && $('.row.active .cdBkr-spot-2').hasClass('guess-made')
    && $('.row.active .cdBkr-spot-3').hasClass('guess-made')
    && $('.row.active .cdBkr-spot-4').hasClass('guess-made')) {      
      $('.submit').addClass('show');      
    }
  }

 const guessIfActive = () => {    
    $('.row.active .cdBkr-spot').click(function() {      
      $(this).css('background-color', bgColor);      
      $(this).addClass('guess-made');      
      showSubmit();   
    });
  }
  guessIfActive();

  // Timer stuff ~~~~~~~~~~~~
  let time = $('#time')[0];  
  let ms = 0;
  let s = 0;
  let m = 0;
  const timeLimit_mins = 3;

  const timeCount = () => {
    ms++;
    if (ms >= 10) {
      ms = 0;
      s++;
      if (s >= 60) {
        s = 0;
        m++;
        if (m >= timeLimit_mins) {
          $('#loser').css('left', 0);
          $('.out-of-time').html('You ran out of time');
        }
      }
    }    
    time.textContent =
    (m != 0 ? m + ':' : '') + // display minutes
    (m != 0 ? (s > 9 ? s : '0' + s) : s) + '.' + // display seconds
    (ms ? (ms > 9 ? ms : '' + ms) : '0') + // display milliseconds
    (m != 0 ? '' : ' s'); // display units of time

    timer();
  }
  
  let retrievedScores = localStorage.getItem('high scores');

  let scores = [];
  if (localStorage.length != 0) {
    retrievedScores.toString();
    scores.unshift(retrievedScores);
  }
  let scoresArray = scores.toString().split(',');
  let secArray = scoresArray.filter(x => x.includes('s'));
  secArray = secArray.sort();
  let minsArray = scoresArray.filter(x => x.includes(':'));
  minsArray = minsArray.sort();
  scoresArray = secArray.concat(minsArray);
  $('.score-1').html(scoresArray[0]);
  $('.score-2').html(scoresArray[1]);
  $('.score-3').html(scoresArray[2]);
  $('.score-4').html(scoresArray[3]);
  $('.score-5').html(scoresArray[4]);

  const timer = () => {
    if ($('#winner').css('left') === '0px') {
      let userTime = time.textContent;
      $('.user-time p').html(userTime);

      let retrievedScores = localStorage.getItem('high scores');      

      let scores = [];
      if (localStorage.length != 0) {
        retrievedScores.toString();
        scores.unshift(retrievedScores);
      }
      scores.push(userTime);
      let scoresArray = scores.toString().split(',');
      localStorage.setItem('high scores', scoresArray);

      return;
    } else {
      setTimeout(timeCount, 100);
    }
  }
  $('.start-timer p').click(function() {
    timer();
    $('#row-1').addClass('active');
    guessIfActive();
    $('.start-timer-wrapper').hide();
  });
  // END Timer stuff ~~~~~~~~~~~~~~

  // Click submit button ~~~~~~~~~~~~~~~
  let guessArray = [];
  let gradeArray = [0,0,0,0];

  $('.submit').click(function() {
    
    clickCount++;
    
    $('.submit').removeClass('show');

    // Populating the guess array based off user input ~~~~~~~~~~~~~~~
    for (let i = 0; i <= 3; i++) {      
      for (let j = 0; j <= 5; j++) {
        if ($(`.row.active .cdBkr-spot-${i+1}`).css('background-color') === color[j]) {
          guessArray.push(j);
        }
      }
    }    
    
    // saves original version of codeArray to revert back to
    let saveCodeArray = codeArray.slice();

    // Black Key Check
    for (let i = 0; i < guessArray.length; i++) {
      if (codeArray[i] === guessArray[i]) {       
        gradeArray[i] = 1;
        codeArray[i] = -1;
        guessArray[i] = -2;                       
      } else {
        gradeArray[i] = 0;
      }
    }

    // White Key Check
    for (let i = 0; i < 4; i++) {      
      for (let j = 0; j < 4; j++) {                      
        if (codeArray[i] === guessArray[j]) {                    
          gradeArray[j] = 2;
          guessArray[j] = -2;
          break;                  
        }
      }
    }

    // place grade pegs based off black & white checks    
    let blackGradeArray = gradeArray.filter(black => black === 1);
    let whiteGradeArray = gradeArray.filter(white => white === 2);
    let blankGradeArray = gradeArray.filter(blank => blank === 0);
    let sortedGradeArray = (blackGradeArray.concat(whiteGradeArray)).concat(blankGradeArray);

    for (let i = 0; i < sortedGradeArray.length; i++) {
      if (sortedGradeArray[i] === 1) {        
        $(`.row.active .cdMkr-spot-${i+1}`).css('background-color', color4);
      } else if (sortedGradeArray[i] === 2) {        
        $(`.row.active .cdMkr-spot-${i+1}`).css('background-color', color3);
      }
    }

    if (gradeArray[0] === 1 && gradeArray[1] === 1 && gradeArray[2] === 1 && gradeArray[3] === 1) {
      $('#winner').css('left', 0);      
    }

    // replaces manipulated version of codeArray to original
    codeArray = saveCodeArray;
    
    guessArray = [];  
    
    // move active row after each user guess    
    for (let i = 1; i <= 10; i++) {
      if (clickCount === i) {
        $(`#row-${i}.row`).removeClass('active');
        $(`#row-${i+1}.row`).addClass('active');
      }
      if (clickCount === 10) {
        for (let i = 0; i < 4; i++) {
          if (gradeArray[i] !== 1) {          
            $('#loser').css('left', 0);
          }
        }                   
      }
    }

    guessIfActive();

  }); // END click #submit 

  $('#new-game p').click(function () {
    location.reload();
  });

  $('#reset-btn p').click(function () {
    location.reload();
  });

  $('#rules .icon').css('right', '100%');
  $('#rules-btn p').click(function () {
    $('#rules').css('right', '0%');      
  });
  $('#rules .icon').click(function () {
    $('#rules').css('right', '100%');
  });
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
  function updateContainer() {
    $('body').css('overflow-y', 'hidden');
    const vpWidth = $(window).width();
    
    $('body').css('overflow-y', 'visible');

    const gameBoardWidth = $('#gameboard').outerWidth();    
    if (vpWidth > 840) {
      const posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
      $('#color-selector').css('left', posColorSelector);
      const posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;    
      $('.submit').css('right', posSubmitButton);
      $('#color-selector').css('width', 'auto');
    } else {
      $('#color-selector').css('left', '50%');
      $('#color-selector').css('width', gameBoardWidth);
    }
    if (vpWidth > 840) {
      const vpHeight = $(window).height();
      $('.rules-wrapper').css('height', vpHeight - 220);
    } else {
      const vpHeight = $(window).height();
      $('.rules-wrapper').css('height', vpHeight - 150);
    }
    if (vpWidth > 1000) {
      $('#timer').css('right', 80);
    } else if (vpWidth > 840) {
      $('#timer').css('right', 30);
    } else if (vpWidth <= 840 && vpWidth > 500) {    
      $('#timer').css('right', (vpWidth - gameBoardWidth) / 2);
    } else {
      $('#timer').css('right', 20);
    }
  }

  $(window).resize(function() {
    updateContainer();
  });

});