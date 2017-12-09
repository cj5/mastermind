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
  
  let bgColor = color1;
  let clickCount = 0;
  
  $('body').css('overflow-y', 'hidden');
  const vpWidth = $(window).width();
  
  $('body').css('overflow-y', 'visible');
  const vpHeight = $(window).height();

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // GAME BOARD POSITIONING
  const gameBoardWidth = $('#gameboard').outerWidth();
  const posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
  $('#color-selector').css('left', posColorSelector);
  const posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;
  $('#submit').css('right', posSubmitButton);  
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
  // let codeArray = [3,1,4,1];
  

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

    let blackKeyCheck = () => {      
      let blackKeyCount = 0;
      for (let i = 0; i < gradeArray.length; i++) {        
        if (gradeArray[i] === 1) {
          blackKeyCount++;          
        }
      }
      if (blackKeyCount === 1) {
        $('.row.active .cdMkr-spot-1').css('background-color', color4);
      }
      if (blackKeyCount === 2) {
        $('.row.active .cdMkr-spot-1').css('background-color', color4);
        $('.row.active .cdMkr-spot-2').css('background-color', color4);
      }
      if (blackKeyCount === 3) {
        $('.row.active .cdMkr-spot-1').css('background-color', color4);
        $('.row.active .cdMkr-spot-2').css('background-color', color4);
        $('.row.active .cdMkr-spot-3').css('background-color', color4);
      }
      if (blackKeyCount === 4) {
        $('.row.active .cdMkr-spot-1').css('background-color', color4);
        $('.row.active .cdMkr-spot-2').css('background-color', color4);
        $('.row.active .cdMkr-spot-3').css('background-color', color4);
        $('.row.active .cdMkr-spot-4').css('background-color', color4);
      }
    }
    blackKeyCheck();
    // END Black Key Check

    // White Key Check
    for (let i = 0; i < 4; i++) {    
      for (let j = 0; j < 4; j++) {
        if (codeArray[i] === guessArray[j]) {                    
          gradeArray[i] = 2;
          guessArray[j] = -2;
          break;          
        }
      }
    }
    let whiteKeyCheck = () => {
      let blackKeyCount = 0;
      for (let i = 0; i < gradeArray.length; i++) {
        if (gradeArray[i] === 1) {
          blackKeyCount++;          
        }
      }
      let whiteKeyCount = 0;
      for (let i = 0; i < gradeArray.length; i++) {
        if (gradeArray[i] === 2) {
          whiteKeyCount++;
          
        }
      }
      if (blackKeyCount === 4) {
        $('#winner').css('left', 0);
      }

      if ((blackKeyCount === 3) && (whiteKeyCount === 1)) {
        $('.row.active .cdMkr-spot-4').css('background-color', color3); 
      }

      if ((blackKeyCount === 2) && (whiteKeyCount === 2)) {
        $('.row.active .cdMkr-spot-3').css('background-color', color3);
        $('.row.active .cdMkr-spot-4').css('background-color', color3);  
      }
      if ((blackKeyCount === 2) && (whiteKeyCount === 1)) {
        $('.row.active .cdMkr-spot-3').css('background-color', color3);
      }      

      if ((blackKeyCount === 1) && (whiteKeyCount === 3)) {
        $('.row.active .cdMkr-spot-2').css('background-color', color3);
        $('.row.active .cdMkr-spot-3').css('background-color', color3);
        $('.row.active .cdMkr-spot-4').css('background-color', color3);
      }
      if ((blackKeyCount === 1) && (whiteKeyCount === 2)) {
        $('.row.active .cdMkr-spot-2').css('background-color', color3);
        $('.row.active .cdMkr-spot-3').css('background-color', color3);
      }
      if ((blackKeyCount === 1) && (whiteKeyCount === 1)) {
        $('.row.active .cdMkr-spot-2').css('background-color', color3);
      }            

      if ((blackKeyCount === 0) && (whiteKeyCount === 4)) {
        $('.row.active .cdMkr-spot-1').css('background-color', color3);
        $('.row.active .cdMkr-spot-2').css('background-color', color3);
        $('.row.active .cdMkr-spot-3').css('background-color', color3);
        $('.row.active .cdMkr-spot-4').css('background-color', color3);
      }
      if ((blackKeyCount === 0) && (whiteKeyCount === 3)) {
        $('.row.active .cdMkr-spot-1').css('background-color', color3);
        $('.row.active .cdMkr-spot-2').css('background-color', color3);
        $('.row.active .cdMkr-spot-3').css('background-color', color3);
      }
      if ((blackKeyCount === 0) && (whiteKeyCount === 2)) {
        $('.row.active .cdMkr-spot-1').css('background-color', color3);
        $('.row.active .cdMkr-spot-2').css('background-color', color3);
      } 
      if ((blackKeyCount === 0) && (whiteKeyCount === 1)) {
        $('.row.active .cdMkr-spot-1').css('background-color', color3);
      }              
    }
    whiteKeyCheck();
    // END White Key Check

    codeArray = saveCodeArray;
    
    guessArray = [];    
        
    if (clickCount === 1) {
      $('#row-1.row').removeClass('active');
      $('#row-2.row').addClass('active');
      
    }
    if (clickCount === 2) {
      $('#row-2.row').removeClass('active');
      $('#row-3.row').addClass('active');
      
    }
    if (clickCount === 3) {
      $('#row-3.row').removeClass('active');
      $('#row-4.row').addClass('active');
    }
    if (clickCount === 4) {
      $('#row-4.row').removeClass('active');
      $('#row-5.row').addClass('active');
    }
    if (clickCount === 5) {
      $('#row-5.row').removeClass('active');
      $('#row-6.row').addClass('active');
    }
    if (clickCount === 6) {
      $('#row-6.row').removeClass('active');
      $('#row-7.row').addClass('active');
    }
    if (clickCount === 7) {
      $('#row-7.row').removeClass('active');
      $('#row-8.row').addClass('active');
    }
    if (clickCount === 8) {
      $('#row-8.row').removeClass('active');
      $('#row-9.row').addClass('active');
    }
    if (clickCount === 9) {
      $('#row-9.row').removeClass('active');
      $('#row-10.row').addClass('active');
    }
    if (clickCount === 10) {
      for (let i = 0; i < 4; i++) {
        if (gradeArray[i] !== 1) {          
          $('#loser').css('left', 0);
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
    const posColorSelector = ((vpWidth - gameBoardWidth) / 2) - 120;
    $('#color-selector').css('left', posColorSelector);
    const posSubmitButton = ((vpWidth - gameBoardWidth) / 2) - 150;    
    $('#submit').css('right', posSubmitButton);
    const vpHeight = $(window).height();
    $('.rules-wrapper').css('height', vpHeight - 220);
  }

  $(window).resize(function() {
    updateContainer();
  });

});