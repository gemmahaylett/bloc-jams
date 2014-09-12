$(document).ready(function(){
  $('.hero-content h3').click(function(){
    console.log('hello');
    subText = $(this).text();
    $(this).text(subText + ' !');
  });

  var onHoverAction = function(event){
    console.log('Hover action triggered.');
    $(this).animate({'margin-top' : '10px'});
  };

  var offHoverAction = function(event){
    console.log('Off-hover action triggered.');
    $(this).animate({'margin-top': '0px'});
  }

  var onHoverTextAction = function(event){
     $(this).css('color', '#FF0000');
  }

  var offHoverTextAction = function(event){
     $(this).css('color', '#FFF');
  }

  var onClickAction = function(event){
    $(this).css('font-size', '50px');
  }

  var onClickFade = function(event){
    $(this).fadeOut();
  }

  $('.selling-points .point').hover(onHoverAction, offHoverAction);
  $('.selling-points .point h5').click(onClickAction);
  $('.hero-content h3').hover(onHoverTextAction, offHoverTextAction);
  $('.hero-content h1').click(onClickFade);

});