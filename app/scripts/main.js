$(document).ready(function() {

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TOP LEVEL VARIABLE DECLARATIONS 
  let bgColor = '';
  let colorN = $('.cdBkr-spot').css('background-color');
  console.log('colorN: ', colorN);
  let color1 = $('.color-1').css('background-color');
  console.log('color1: ', color1);
  let color2 = $('.color-2').css('background-color');
  console.log('color2: ', color2);
  let color3 = $('.color-3').css('background-color');
  console.log('color3: ', color3);
  let color4 = $('.color-4').css('background-color');
  console.log('color4: ', color4);
  let color5 = $('.color-5').css('background-color');
  console.log('color5: ', color5);
  let color6 = $('.color-6').css('background-color');
  console.log('color6: ', color6);
  let clickCount = 0;
  $('body').css('overflow-y', 'hidden');
  let vpWidth = $(window).width();
  console.log('vpWidth', vpWidth);
  $('body').css('overflow-y', 'visible');

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // GAME BOARD POSITIONING
  let gameBoardWidth = $('#gameboard').outerWidth();
  let posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
  $('#color-selector').css('left', posColorSelector);  
  let posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;
  $('#submit').css('right', posSubmitButton);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function makeCode() {
    let codeArray = [];
    for (let i = 0; i < 4; i++) {
      codeArray.push(Math.floor(Math.random() * 6));
    }
    return codeArray;
  }
  let codeArray = makeCode();
  console.log('Code to break: ', codeArray);  

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  $('#row-1.row').addClass('active');

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  $('#color-selector .cdBkr-spot').click(function() {
    $('#color-selector .cdBkr-spot').css('border-width', '2px');
    $('#color-selector .cdBkr-spot').removeClass('selected');
    $(this).css('border-width', '6px');
    $(this).addClass('selected');
    bgColor = $('#color-selector .cdBkr-spot.selected').css('background-color');    
    console.log('Selected color: ', bgColor);
  });
  
  $('.row .cdBkr-spot').click(function() {    
    if ($('.row').hasClass('active')) {
      $(this).css('background-color', bgColor);
      if (bgColor) {
        $(this).addClass('guess-made');
      } 
      showSubmit();
    } else {
      $(this).css('background-color', 'orange');
    }   
  });

  function showSubmit() {
    if ($('.row.active .cdBkr-spot-1').hasClass('guess-made')
    && $('.row.active .cdBkr-spot-2').hasClass('guess-made')
    && $('.row.active .cdBkr-spot-3').hasClass('guess-made')
    && $('.row.active .cdBkr-spot-4').hasClass('guess-made')) {      
      $('#submit').addClass('show');
    }
  }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  let guessArray = [];

  $('#submit').click(function() {
    
    $('#submit').removeClass('show');

    if ($('.row.active .cdBkr-spot-1').css('background-color') === color1) { guessArray.push(0); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === color2) { guessArray.push(1); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === color3) { guessArray.push(2); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === color4) { guessArray.push(3); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === color5) { guessArray.push(4); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === color6) { guessArray.push(5); }

    if ($('.row.active .cdBkr-spot-2').css('background-color') === color1) { guessArray.push(0); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === color2) { guessArray.push(1); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === color3) { guessArray.push(2); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === color4) { guessArray.push(3); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === color5) { guessArray.push(4); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === color6) { guessArray.push(5); }

    if ($('.row.active .cdBkr-spot-3').css('background-color') === color1) { guessArray.push(0); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === color2) { guessArray.push(1); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === color3) { guessArray.push(2); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === color4) { guessArray.push(3); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === color5) { guessArray.push(4); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === color6) { guessArray.push(5); }

    if ($('.row.active .cdBkr-spot-4').css('background-color') === color1) { guessArray.push(0); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === color2) { guessArray.push(1); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === color3) { guessArray.push(2); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === color4) { guessArray.push(3); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === color5) { guessArray.push(4); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === color6) { guessArray.push(5); }
    
    // console.log('guessArray: ', guessArray);
    // console.log('codeArray: ', codeArray);    

    for (let i = 0; i < guessArray.length; i++) {
      if (guessArray[i] === codeArray[i]) {
        $(`.row.active .cdMkr-spot-${i + 1}`).css('background-color', color4);
      }
    }

    guessArray = [];

    if ($('#row-1.row').hasClass('active')) {
      $('#row-1.row').removeClass('active');
      $('#row-2.row').addClass('active');
    }

  }); // END click #submit 
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
  function updateContainer() {
    $('body').css('overflow-y', 'hidden');
    let vpWidth = $(window).width();
    console.log('vpWidth', vpWidth);
    $('body').css('overflow-y', 'visible');

    let gameBoardWidth = $('#gameboard').outerWidth();

    let posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
    $('#color-selector').css('left', posColorSelector);

    let posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;    
    $('#submit').css('right', posSubmitButton);
  }

  $(window).resize(function() {
    updateContainer();
  });

});