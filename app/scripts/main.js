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
  if (vpWidth > 820) {
    const posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
    $('#color-selector').css('left', posColorSelector);
    const posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;
    $('#submit').css('right', posSubmitButton);
  }    
  $('.rules-wrapper').css('height', vpHeight - 220);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const makeCode = () => {
    let codeArray = [];
    for (let i = 0; i < 4; i++) {
      codeArray.push(Math.floor(Math.random() * 6));
    }
    return codeArray;
  }
  let codeArray = makeCode();
  // let codeArray = [3,2,4,0];  

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
      $('#submit').addClass('show');
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  let guessArray = [];
  let gradeArray = [0,0,0,0];

  $('#submit').click(function() {
    
    clickCount++;
    
    $('#submit').removeClass('show');

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
    console.log('vpWidth: ', vpWidth);
    if (vpWidth > 820) {
      const posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
      $('#color-selector').css('left', posColorSelector);
      const posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;    
      $('#submit').css('right', posSubmitButton);
      $('#color-selector').css('width', 'auto');
    } else {
      $('#color-selector').css('left', '50%');
      $('#color-selector').css('width', gameBoardWidth);
    }
    const vpHeight = $(window).height();
    $('.rules-wrapper').css('height', vpHeight - 220);
  }

  $(window).resize(function() {
    updateContainer();
  });

});