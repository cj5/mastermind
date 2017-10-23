'use strict';

$(document).ready(function() {

  let bgColor = '';
  
  console.log(makeCode());
  
  $('body').css('overflow-y', 'hidden');
  let vpWidth = $(window).width();
  console.log('vpWidth', vpWidth);
  $('body').css('overflow-y', 'visible');
  
  let gameBoardWidth = $('#gameboard').outerWidth();  
  
  let posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;  
  $('#color-selector').css('left', posColorSelector); 

  let posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;
  console.log('posSubmitButton', posSubmitButton);
  $('#submit').css('right', posSubmitButton);  

  $('#color-selector .cdBkr-spot').click(function() {   
    $('#color-selector .cdBkr-spot').css('border-width', '2px');
    $('#color-selector .cdBkr-spot').removeClass('selected');
    $(this).css('border-width', '6px');
    $(this).addClass('selected');
    bgColor = $('#color-selector .cdBkr-spot.selected').css('background-color'); 
    console.log('bgColor', bgColor);
  });

  $('.row.active .cdBkr-spot').click(function() {      
    $(this).css('background-color', bgColor);
    $(this).addClass('guess-made');
  });
  // if ('.row.active .cdBkr-spot-1') 

  function makeCode() {
    let codeArray = [];
    for (let i = 0; i < 4; i++) {
      codeArray.push(Math.floor(Math.random() * 6));
    }
    return codeArray;
  } 
  makeCode();

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