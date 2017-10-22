$(document).ready(function() {

let color1 = '#E82C0C';
let color2 = '#2739E8';
let color3 = '#fff';
let color4 = '#333';
let color5 = '#39B050';
let color6 = '#FFF145';
let color7 = '#ccc';

$(window).click(function() {
  $('#spot_1-1, #spot_1-2, #spot_1-3, #spot_1-4').addClass('hide');
  $('#spot_1-1, #spot_1-2, #spot_1-3, #spot_1-4').removeClass('show');
  console.log('clicked NOT spot_1-1');
});
$('#row-1 .cdBkr-spot-1').click(function() {  
  $('#spot_1-1').addClass('show');
  $('#spot_1-1').removeClass('hide');
  event.stopPropagation();
  console.log('clicked spot_1-1');
});
///////////////////////////////////////////
$(window).click(function() {
  $('#spot_1-2').addClass('hide');
  $('#spot_1-2').removeClass('show');
  console.log('clicked NOT spot_1-2');
});
$('#row-1 .cdBkr-spot-2').click(function() {  
  $('#spot_1-2').addClass('show');
  $('#spot_1-2').removeClass('hide');
  event.stopPropagation();
  console.log('clicked spot_1-2');
});
///////////////////////////////////////////
$(window).click(function() {
  $('#spot_1-3').addClass('hide');
  $('#spot_1-3').removeClass('show');
  console.log('clicked NOT spot_1-3');
});
$('#row-1 .cdBkr-spot-3').click(function() {  
  $('#spot_1-3').addClass('show');
  $('#spot_1-3').removeClass('hide');
  event.stopPropagation();
  console.log('clicked spot_1-3');
});
///////////////////////////////////////////
$(window).click(function() {
  $('#spot_1-4').addClass('hide');
  $('#spot_1-4').removeClass('show');
  console.log('clicked NOT spot_1-4');
});
$('#row-1 .cdBkr-spot-4').click(function() {  
  $('#spot_1-4').addClass('show');
  $('#spot_1-4').removeClass('hide');
  event.stopPropagation();
  console.log('clicked spot_1-4');
});
///////////////////////////////////////////

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
$('select#spot_1-1').change(function() {
  if(this.value == 'op-1') {
    $('#row-1 .cdBkr-spot-1').css('background-color', color1);
  } else if (this.value == 'op-2') {
    $('#row-1 .cdBkr-spot-1').css('background-color', color2);
  } else if (this.value == 'op-3') {
    $('#row-1 .cdBkr-spot-1').css('background-color', color3);
  } else if (this.value == 'op-4') {
  $('#row-1 .cdBkr-spot-1').css('background-color', color4);
  } else if (this.value == 'op-5') {
    $('#row-1 .cdBkr-spot-1').css('background-color', color5);
  } else if (this.value == 'op-6') {
    $('#row-1 .cdBkr-spot-1').css('background-color', color6);
  } else {
    $('#row-1 .cdBkr-spot-1').css('background-color', color7);
  } 
});
///////////////////////////////////////////
$('select#spot_1-2').change(function() {
  if(this.value == 'op-1') {
    $('#row-1 .cdBkr-spot-2').css('background-color', color1);
  } else if (this.value == 'op-2') {
    $('#row-1 .cdBkr-spot-2').css('background-color', color2);
  } else if (this.value == 'op-3') {
    $('#row-1 .cdBkr-spot-2').css('background-color', color3);
  } else if (this.value == 'op-4') {
  $('#row-1 .cdBkr-spot-2').css('background-color', color4);
  } else if (this.value == 'op-5') {
    $('#row-1 .cdBkr-spot-2').css('background-color', color5);
  } else if (this.value == 'op-6') {
    $('#row-1 .cdBkr-spot-2').css('background-color', color6);
  } else {
    $('#row-1 .cdBkr-spot-2').css('background-color', color7);
  } 
});
///////////////////////////////////////////
$('select#spot_1-3').change(function() {
  if(this.value == 'op-1') {
    $('#row-1 .cdBkr-spot-3').css('background-color', color1);
  } else if (this.value == 'op-2') {
    $('#row-1 .cdBkr-spot-3').css('background-color', color2);
  } else if (this.value == 'op-3') {
    $('#row-1 .cdBkr-spot-3').css('background-color', color3);
  } else if (this.value == 'op-4') {
  $('#row-1 .cdBkr-spot-3').css('background-color', color4);
  } else if (this.value == 'op-5') {
    $('#row-1 .cdBkr-spot-3').css('background-color', color5);
  } else if (this.value == 'op-6') {
    $('#row-1 .cdBkr-spot-3').css('background-color', color6);
  } else {
    $('#row-1 .cdBkr-spot-3').css('background-color', color7);
  } 
});
///////////////////////////////////////////
$('select#spot_1-4').change(function() {
  if(this.value == 'op-1') {
    $('#row-1 .cdBkr-spot-4').css('background-color', color1);
  } else if (this.value == 'op-2') {
    $('#row-1 .cdBkr-spot-4').css('background-color', color2);
  } else if (this.value == 'op-3') {
    $('#row-1 .cdBkr-spot-4').css('background-color', color3);
  } else if (this.value == 'op-4') {
  $('#row-1 .cdBkr-spot-4').css('background-color', color4);
  } else if (this.value == 'op-5') {
    $('#row-1 .cdBkr-spot-4').css('background-color', color5);
  } else if (this.value == 'op-6') {
    $('#row-1 .cdBkr-spot-4').css('background-color', color6);
  } else {
    $('#row-1 .cdBkr-spot-4').css('background-color', color7);
  } 
});
///////////////////////////////////////////

});