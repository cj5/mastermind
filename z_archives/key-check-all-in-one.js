// White Key Check
for (let i = 0; i < guessArray.length; i++) {
  if (guessArray[i] === codeArray[i]) {
    console.log('black grade check 1: ', gradeArray);
    gradeArray[i] = 1;        
    codeArray[i] = -1;
    console.log('black grade check 2: ', gradeArray);
    console.log('codeArray: ', codeArray);
  }
}
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if ((guessArray[i] != codeArray[i]) && (guessArray[i] === codeArray[j])) {
      console.log('white grade check 1: ', gradeArray);
      if (gradeArray[i] === 0) {
        gradeArray[i] = 2;
      }          
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
    $('.row.active .cdMkr-spot-1').css('background-color', color4);
    $('.row.active .cdMkr-spot-2').css('background-color', color4);
    $('.row.active .cdMkr-spot-3').css('background-color', color4);
    $('.row.active .cdMkr-spot-4').css('background-color', color4);
  }
  if ((blackKeyCount === 2) && (whiteKeyCount === 2)) {
    $('.row.active .cdMkr-spot-1').css('background-color', color4);
    $('.row.active .cdMkr-spot-2').css('background-color', color4);
    $('.row.active .cdMkr-spot-3').css('background-color', color4);
    $('.row.active .cdMkr-spot-4').css('background-color', color4);
  }
  if ((blackKeyCount === 2) && (whiteKeyCount === 1)) {
    $('.row.active .cdMkr-spot-1').css('background-color', color4);
    $('.row.active .cdMkr-spot-2').css('background-color', color4);
    $('.row.active .cdMkr-spot-3').css('background-color', color4);
  }
  if ((blackKeyCount === 1) && (whiteKeyCount === 3)) {
    $('.row.active .cdMkr-spot-1').css('background-color', color4);
    $('.row.active .cdMkr-spot-2').css('background-color', color3);
    $('.row.active .cdMkr-spot-3').css('background-color', color3);
    $('.row.active .cdMkr-spot-4').css('background-color', color3);
  }
  if ((blackKeyCount === 1) && (whiteKeyCount === 2)) {
    $('.row.active .cdMkr-spot-1').css('background-color', color4);
    $('.row.active .cdMkr-spot-2').css('background-color', color3);
    $('.row.active .cdMkr-spot-3').css('background-color', color3);
  }
  if ((blackKeyCount === 1) && (whiteKeyCount === 1)) {
    $('.row.active .cdMkr-spot-1').css('background-color', color4);
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