$(document).ready(function() {

  let bgColor = '';

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
  }); 

});