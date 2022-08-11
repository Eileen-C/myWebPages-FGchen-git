$(document).ready(
    function(){
    if ($(window).width() > 768){
        $('.header').height($(window).height()/2);
    }
    else{
        $('.header').height($(window).height()/2.5);
    }
  })

  $(window).resize(
    function(){
        if ($(window).width() > 768)
            $('.header').height($(window).height()/2);
        
        else
            $('.header').height($(window).height()/2.5);
    }
  )