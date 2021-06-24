$(document).ready(function () {
  // header menu
  $('.nav-toggle').click(function () {
    $('.mobile-menu').toggleClass('open');
  });
  // /header menu

  // desktop header tab menu
  $(function(){
    $(".nav-links li a").on("click", function() {
    $(".tabBoxes").toggle();
    // $($(this).attr("href")).fadeToggle();
    });
    return false;
    });

  // /desktop header tab menu 

  // home - slider
  $('.slick-track').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    arrows: false
  });

  // home - slider

  // home - slider bc
  // $('.home-slide').slick({
  //   infinite: true,
  //   speed: 300,
  //   fade: true,
  //   cssEase: 'linear',
  //   autoplay:true,
  //   arrows: false
  // });

  // /home - slider bc

  // home - fade in
  $(window).scroll( function(){
    // Check the location of the object
    $('.fade-in').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        // If the object is inside the window, fade it in!
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);
        }
    }); 
  });
  // /home - fade in

  // jeans - shop top
  setInterval(function(){
    moveRight();
  },2800);

  var slideCount = $('.shop-top-images img').length; //count the slides
  var slideWidth = $('.shop-top-images img').width();
  var slideHeight = $('.shop-top-images img').height();
  
  var slideUlWidth = slideCount * slideWidth;

  $('.shop-top-slider').css({ width: slideWidth, height: slideHeight });
  $('.shop-top-images').css({width:slideUlWidth, marginLeft: -slideWidth});

  $('shop-top-images img:last-child').prependTo('.shop-top-images');

  function moveLeft(){
    $('.shop-top-images').animate({
      left: + slideWidth
    },200, function(){
      $('.shop-top-images img:last-child').prependTo('.shop-top-images');
      $('.shop-top-images').css('left', '');
    });
  }

  function moveRight(){
    $('.shop-top-images').animate({
      left: - slideWidth
    },200, function(){
      $('.shop-top-images img:first-child').appendTo('.shop-top-images');
      $('.shop-top-images').css('left', '');
    });
  }
  // / jeans - shop top

  // item women o men
  $('#allItems').click(function(){
    $('.one-item-mens').show(),
    $('.one-item-womens').show();
  });

  $('#womensItems').click(function(){
    $('.one-item-mens').hide(),
    $('.one-item-womens').show();
  });

  $('#mensItems').click(function(){
    $('.one-item-womens').hide(),
    $('.one-item-mens').show();
  });
  // /item women o men

  // faq - sliders
  $('#flip-a').click(function () {
    $('#panel-a').slideToggle();
  });

  $('#flip-b').click(function () {
    $('#panel-b').slideToggle();
  });

  $('#flip-c').click(function () {
    $('#panel-c').slideToggle();
  });

  $('#flip-d').click(function () {
    $('#panel-d').slideToggle();
  });
  // /faq - sliders

  // contact - click
  $('#contact').click(function () {
    $(".contact-us").show(),
    $('.faq-menu').animate({ top: '500px' }, 'slow').css({ display: 'none' }),
    $('.s-locations').css({ display: 'none' }),
    $('.order-history').css({ display: 'none' });
  });
  // /contact - click

  // faq - click
  $('#faq').click(function () {
    $(".contact-us").hide(),
    $('.faq-menu').css({ display: 'block' }).animate({ top: '-500px' }),
    $('.s-locations').css({ display: 'none' }),
    $('.order-history').css({ display: 'none' });
  });

  $('#order-history-infaq').click(function () {
    $('.order-history').css({ display: 'block' }),
    $('.faq-menu').css({ display: 'none'});
  });
  // /faq - click

  // store locations - click
  $('#store-locations').click(function () {
    $('.contact-us').hide(),
    $('.faq-menu').css({ display: 'none' }),
    $('.s-locations').css({ display: 'block' }).animate({ right: '500px' }),
    $('.order-history').css({ display: 'none' });
  });
  // /store locations

  // order history
  $('#order-history').click(function () {
    $('.contact-us').hide(),
    $('.faq-menu').css({ display: 'none' }),
    $('.s-locations').css({ display: 'none' }).animate({ right: '500px' }),
    $('.order-history').css({ display: 'block' });
  });
  // /order history

  // keith count stock
  var stockVal = 100;
    var cart = 0;

    $('.add').click(function(){
        cart = cart + 1;
        $('.cart').val(cart);

        stockVal = stockVal - 1;
        $('.stockLeft').val(stockVal);
        
    });


    $('.minus').click(function(){
        
        if (cart == 0){
            cart = 0;
        }else{
            cart = cart - 1;
            $('.cart').val(cart);
            stockVal = stockVal + 1;
           $('.stockLeft').val(stockVal);
        }
    });
    // /keith count stock

    // keith fit details

    $('#fit-details').click(function(){
      $('#fit-details-panel').toggle();
    });
    // /keith fit details

    // scroll button
    jQuery(function() {
      var pagetop = $('#page_top');   
      pagetop.hide();
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
              pagetop.fadeIn();
          } else {
              pagetop.fadeOut();
          }
      });
      pagetop.click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 500); //0.5秒かけてトップへ移動
          return false;
      });
  });
    // /scroll button

});