$(document).ready(function() {
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);    
  }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TOP LEVEL VARIABLE DECLARATIONS   
  const colorN = 'rgb(170, 170, 170)';
  // console.log('colorN: ', colorN);
  const color1 = $('.color-1').css('background-color');
  // console.log('color1: ', color1);
  const color2 = $('.color-2').css('background-color');
  // console.log('color2: ', color2);
  const color3 = $('.color-3').css('background-color');
  // console.log('color3: ', color3);
  const color4 = $('.color-4').css('background-color');
  // console.log('color4: ', color4);
  const color5 = $('.color-5').css('background-color');
  // console.log('color5: ', color5);
  const color6 = $('.color-6').css('background-color');
  // console.log('color6: ', color6);
  let bgColor = color1;
  let clickCount = 0;
  console.log('clickCount: ', clickCount);
  $('body').css('overflow-y', 'hidden');
  const vpWidth = $(window).width();
  console.log('vpWidth', vpWidth);
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
  // let codeArray = [1,0,4,2];
  console.log('❱❱ Code to break: ', codeArray);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  $('#color-selector .cdBkr-spot').click(function() {
    $('#color-selector .cdBkr-spot').css('border-width', '2px');
    $('#color-selector .cdBkr-spot').removeClass('selected');
    $(this).css('border-width', '6px');
    $(this).addClass('selected');
    bgColor = $('#color-selector .cdBkr-spot.selected').css('background-color');    
    // console.log('Selected color: ', bgColor);
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
      // console.log('clicked-active');   
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

    console.log('clickCountBefore: ', clickCount);
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
    
    console.log('guessArray: ', guessArray);
    console.log('codeArray: ', codeArray);    

    let saveCodeArray = codeArray.slice();
    // console.log('saveCodeArray: ', saveCodeArray);

    // Black Key Check
    for (let i = 0; i < guessArray.length; i++) {
      if (codeArray[i] === guessArray[i]) {
        console.log('black grade check 1: ', gradeArray);
        gradeArray[i] = 1;
        codeArray[i] = -1;
        console.log('black grade check 2: ', gradeArray);
        console.log('codeArray: ', codeArray);
      } else {
        gradeArray[i] = 0;
        console.log('black grade check 3: ', gradeArray);
      }
    }
    let blackKeyCheck = () => {
      console.log('blackKeyCheck function fired');
      let blackKeyCount = 0;
      for (let i = 0; i < gradeArray.length; i++) {
        console.log('I-loop black ' + `${i}`);
        console.log('black grade check for loop: ', gradeArray);
        if (gradeArray[i] === 1) {
          blackKeyCount++;
          console.log('blackKeyCount: ', blackKeyCount);
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
      console.log('I-loop white ' + `${i}`);
      for (let j = 0; j < 4; j++) {
        console.log('jloop white ' + `${j}`);
        // console.log('i: ', i);
        // console.log('j: ', j);
        if ((codeArray[i] === guessArray[j]) && (i !== j)) {
          if (i == j) { console.log('%%% i = j %%%'); }
          console.log('white grade check 1: ', gradeArray);
          gradeArray[i] = 2;
          codeArray[i] = -2;
          console.log('codeArray: ', codeArray);
          console.log('guessArray: ', guessArray);         
          console.log('white grade check 2: ', gradeArray);
        }
      }
    }
    let WhiteKeyCheck = () => {
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
          console.log('whiteKeyCount: ', whiteKeyCount);         
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
    WhiteKeyCheck();
    // END White Key Check

    codeArray = saveCodeArray;
    // console.log('saveCodeArray: ', saveCodeArray);
    // console.log('codeArray: ', codeArray);

    console.log('codeArray: ', codeArray);
    console.log('guessArray: ', guessArray);
    console.log('gradeArray: ', gradeArray);
    console.log('clickCountAfter: ', clickCount);    

    guessArray = [];    
        
    if (clickCount === 1) {
      $('#row-1.row').removeClass('active');
      $('#row-2.row').addClass('active');
      // console.log('row-1 not-active');
    }
    if (clickCount === 2) {
      $('#row-2.row').removeClass('active');
      $('#row-3.row').addClass('active');
      // console.log('row-2 not-active');
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
    console.log('vpWidth', vpWidth);
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