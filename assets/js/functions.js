$( document ).ready(function() {

     //Menu
     $('.menu').on('click',function () {
       $('#menu').toggleClass('menuact');
     })

    //Smooth scrolling and active menu
     $('.click').on('click',function (e) {
      e.preventDefault();
      var x = e.target.id;
      $('html,body').animate({
        scrollTop: $("#"+x+"_target").offset().top
      },1000);
       $(this).siblings().removeClass('active').end().addClass('active');
       $('#menu').removeClass('menuact');
     })

    $(window).on('scroll',function () {
        var wScroll = $(window).scrollTop();

        if(wScroll > $('.first-left').offset().top - $(window).height() / 2 ){
          $('.first-left-content').addClass('first-left-content-isShow');
        }

        if( wScroll > $('.work-cont').offset().top - $(window).height() +wScroll/4 ){
         $('.work').each(function (i) {
            setTimeout(function () {
              $('.work').eq(i).addClass('work-isShow');
            },i * 400);
         })
       }

       if(wScroll > $('.four').offset().top - $(window).height() / 2){
         $('.image1').each(function (i) {
           setTimeout(function () {
             $('.image1').eq(i).addClass('image1-isShow');
           },i*300);
         })

         $('.about-content').each(function (i) {
           setTimeout(function () {
             $('.about-content').eq(i).addClass('about-content-isShow');
           },i*300);
         })
       }

       if(wScroll > $('.contact').offset().top - $(window).height() / 2){
         $('.contact-input-li').each(function (i) {
           setTimeout(function() {
             $('.contact-input-li').eq(i).addClass('contact-input-li-isShow');
           },300 * i)
         })
       }

     if(wScroll > $(window).height() / 3.5){
        $('.arrow').addClass('arrow-isShow');
      }else{
        $('.arrow').removeClass('arrow-isShow');
      }   

    })

    $('.arrow').on('click',function (e) {
        $('html,body').animate({
          scrollTop: 0
        },1000);
        e.preventDefault();
      })
});
