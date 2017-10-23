$(document).ready(function() {

  let bgColor = '';
  let emptySpotColor = $('.cdBkr-spot').css('background-color');
  console.log('emptySpotColor', emptySpotColor);
  ///////
  let color1 = $('.color-1').css('background-color');
  console.log('color1: ', color1);
  ///////
  let color2 = $('.color-2').css('background-color');
  console.log('color2: ', color2);
  ///////
  let color3 = $('.color-3').css('background-color');
  console.log('color3: ', color3);
  ///////
  let color4 = $('.color-4').css('background-color');
  console.log('color4: ', color4);
  ///////
  let color5 = $('.color-5').css('background-color');
  console.log('color5: ', color5);
  ///////
  let color6 = $('.color-6').css('background-color');
  console.log('color6: ', color6);
  ///////

  $('body').css('overflow-y', 'hidden');
  let vpWidth = $(window).width();
  console.log('vpWidth', vpWidth);
  $('body').css('overflow-y', 'visible');

  let gameBoardWidth = $('#gameboard').outerWidth();

  let posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
  $('#color-selector').css('left', posColorSelector);

  let posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;
  $('#submit').css('right', posSubmitButton);

  $('#color-selector .cdBkr-spot').click(function() {
    $('#color-selector .cdBkr-spot').css('border-width', '2px');
    $('#color-selector .cdBkr-spot').removeClass('selected');
    $(this).css('border-width', '6px');
    $(this).addClass('selected');
    bgColor = $('#color-selector .cdBkr-spot.selected').css('background-color');    
    console.log('Selected color: ', bgColor);
  });

  $('.row.active .cdBkr-spot').click(function() {
    $(this).css('background-color', bgColor);
    if (bgColor) {
      $(this).addClass('guess-made');
    } 
  });

  function makeCode() {
    let codeArray = [];
    for (let i = 0; i < 4; i++) {
      codeArray.push(Math.floor(Math.random() * 6));
    }
    return codeArray;
  }
  let codeToBreak = makeCode();
  console.log('Code to break: ', codeToBreak);
  
  function showSubmit() {
        if ($('.row.active .cdBkr-spot-1').hasClass('guess-made')
        && $('.row.active .cdBkr-spot-2').hasClass('guess-made')
        && $('.row.active .cdBkr-spot-3').hasClass('guess-made')
        && $('.row.active .cdBkr-spot-4').hasClass('guess-made')) {      
      $('#submit').addClass('show');
    }
  }
  $('.row.active .cdBkr-spot').click(function() {
    showSubmit();
    
    color1 = 0;
    color2 = 1;
    color3 = 2;
    color4 = 3;
    color5 = 4;
    color6 = 5; 
  })

  let guessArray = [];
  
  $('#submit').click(function() {
    
    if ($('.row.active .cdBkr-spot-1').css('background-color') === 'rgb(232, 44, 12)') { guessArray.push(color1); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === 'rgb(39, 57, 232)') { guessArray.push(color2); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === 'rgb(255, 255, 255)') { guessArray.push(color3); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === 'rgb(51, 51, 51)') { guessArray.push(color4); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === 'rgb(57, 176, 80)') { guessArray.push(color5); }
    if ($('.row.active .cdBkr-spot-1').css('background-color') === 'rgb(255, 241, 69)') { guessArray.push(color6); }

    if ($('.row.active .cdBkr-spot-2').css('background-color') === 'rgb(232, 44, 12)') { guessArray.push(color1); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === 'rgb(39, 57, 232)') { guessArray.push(color2); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === 'rgb(255, 255, 255)') { guessArray.push(color3); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === 'rgb(51, 51, 51)') { guessArray.push(color4); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === 'rgb(57, 176, 80)') { guessArray.push(color5); }
    if ($('.row.active .cdBkr-spot-2').css('background-color') === 'rgb(255, 241, 69)') { guessArray.push(color6); }

    if ($('.row.active .cdBkr-spot-3').css('background-color') === 'rgb(232, 44, 12)') { guessArray.push(color1); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === 'rgb(39, 57, 232)') { guessArray.push(color2); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === 'rgb(255, 255, 255)') { guessArray.push(color3); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === 'rgb(51, 51, 51)') { guessArray.push(color4); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === 'rgb(57, 176, 80)') { guessArray.push(color5); }
    if ($('.row.active .cdBkr-spot-3').css('background-color') === 'rgb(255, 241, 69)') { guessArray.push(color6); }

    if ($('.row.active .cdBkr-spot-4').css('background-color') === 'rgb(232, 44, 12)') { guessArray.push(color1); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === 'rgb(39, 57, 232)') { guessArray.push(color2); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === 'rgb(255, 255, 255)') { guessArray.push(color3); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === 'rgb(51, 51, 51)') { guessArray.push(color4); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === 'rgb(57, 176, 80)') { guessArray.push(color5); }
    if ($('.row.active .cdBkr-spot-4').css('background-color') === 'rgb(255, 241, 69)') { guessArray.push(color6); }
    
    console.log('guessArray: ', guessArray);
    console.log('codeArray: ', codeToBreak);

    $('#submit').removeClass('show');
    guessArray = [];

    for (let i = 0; i < 10; i++) {

    }
  })


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
