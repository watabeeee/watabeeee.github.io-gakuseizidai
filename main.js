$(function(){
  $(".ef").css({opacity:"0"});
  $(window).scroll(function (){
    $(".ef").each(function(){
      let ePos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > ePos - windowHeight + windowHeight/5){
        $(this).animate({ opacity: 1 }, { duration: 900, easing: 'swing'})
      }
    });
  });

  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });
  
  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
  });
  
$('.close-modal').click(function(){
  $('#login-modal').fadeOut();
  $('#signup-modal').fadeOut();
});
});
