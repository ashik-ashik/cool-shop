
$(document).ready(function(){
  


// qty
 
    // product quantity up and down
    let $qty_up = $('.qty .qty-up');
    let $qty_down = $('.qty .qty-dw');
    // let $qty_input = $('.product-quantity .qty-input');

    // product qty up
    $qty_up.click(function(e){
        let $qty_input = $(`.qty-input[data-id='${$(this).data("id")}']`);
        if($qty_input.val() >=1 && $qty_input.val() <=9 ){
            $qty_input.val(function(x, defaultValue){
                return ++defaultValue;
            });
        }
    });
    // product qty down
    $qty_down.click(function(e){
        let $qty_input = $(`.qty-input[data-id='${$(this).data("id")}']`);
        if($qty_input.val() >1 && $qty_input.val() <=10 ){
            $qty_input.val(function(x, defaultValue){
                return --defaultValue;
            });
        }
    });


    // slick init for category
    $('.catefory-show').slick({
        slidesToShow: 7,
        slidesToScroll: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

    // slick init for promos
    $('.promo-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

    // slick init for recommanded-img
    $('.recommanded-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        centerMode: true,
      });

    // slick init for most popular products
    $('.popular-product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });



      // single product image show
      $('.main-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.tumb-img'
      });
      $('.tumb-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-img',
        centerMode: true,
        arrows: false,
        focusOnSelect: true
      });

      // search to redirect
      $('#locationSearch').click(function(){
        window.location = "./search.html";
      });



      // dropdowm on hover
      $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
      });


      // log in popup
      $('#login-Popup').click(function(x){
        x.preventDefault();
        let inEmail = $('#login-pop-email');
        let inPass = $('#login-pop-Password');
        let logPopErr = $('#login-pop-error');
        if((inEmail.val() != '') && (inPass.val() != '')){
          window.location = "./varification.html";
          console.log("sign in")
        }else{
          logPopErr.addClass('py-3 clr-or text-center fs-13');
          logPopErr.text("Email or Password didn't match!")
          inEmail.addClass('border-danger')
          inPass.addClass('border-danger')
        }

        console.log("sign-in")
      })

      // sign up popup
      $('#signup-Popup').click(function(x){
        x.preventDefault();
        let upEmail = $('#signup-pop-email');
        let upName = $('#signup-pop-name');
        let upPhone = $('#signup-pop-phone');
        let upPass = $('#sign-pop-pass');
        let upPassCon = $('#sign-pop-con-pass');
        let signPopErr = $('#signup-pop-error');

        if((upEmail.val() != '') && (upName.val() != '') &&
            (upPhone.val() != '') && (upPass.val() != '') && (upPassCon.val() != '')
        ){
          window.location = "./varification.html";
          console.log("sign Up")
        }else{
          signPopErr.addClass('py-3 clr-or text-center fs-13');
          signPopErr.text("An Error occur while singing Up!");
          upEmail.addClass('border-danger');
          upName.addClass('border-danger');
          upPass.addClass('border-danger');
          upPhone.addClass('border-danger');
          upPassCon.addClass('border-danger');
        }
        console.log("sign-Up")
      });

      // weight btn single product page select
      $('.weight .btn').on('click', function(){
        $(this).addClass('bg-lini').siblings().removeClass('bg-lini');
      });

      // card address selection
    $('.card-address').click(function() {  
        $(".card-address").removeClass('bdr-green');
         $(this).addClass('bdr-green');
     });


      // checkout to success order redirect
      $('#place-order').click(function(){
        window.location = "./order-success.html"
      });


        // varified page to home page redirect
        $('#varified').click(function(){
          let c1 = $('#vari-1');
          let c2 = $('#vari-2');
          let c3 = $('#vari-3');
          let c4 = $('#vari-4');
          if((c1.val() == '') || (c2.val() == '') || (c3.val() == '') || (c4.val() == '')){
            c1.addClass('border-danger');
            c2.addClass('border-danger');
            c3.addClass('border-danger');
            c4.addClass('border-danger');

            let eor = $('#eor');
            $('#ico').addClass('bx bx-x-circle text-danger mx-2');
            $('#spa').addClass('text-danger fs-13');
            $('#spa').text( "Wrong Code!");
            eor.addClass('py-3')
            eor.append(ico, spa)
          }else{
            window.location = "./index.html";
          }
        });


        // log in page carousel
        $('.login-main .owl-carousel').owlCarousel({
          loop:true,
          dots: true,
          nav: false,
          items: 1,
          autoplay: true
        });
        // log in / sign up skip
        $('#log-skip').click(function(){
          window.location = './index.html';
        });
      

        // password changed
        $('#passwordChenged').click(function(){
          window.location = './my-account.html';
        });

        // deactive confirm
        $('#deac-conf').click(function(){
          window.location = './index.html';
        });
   
      // current year
      $('#current-year').text(new Date().getFullYear());

  AOS.init();
})
