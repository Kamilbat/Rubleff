$(document).ready(function(){

    /*-----Header------*/

    var burger = $('.burger__item');

    $('.burger').click(function(event){
       event.preventDefault();

        $('.burger__item, .header__menu').toggleClass('active');
        $('body').addClass('lock');

        if(burger.hasClass('active')){

        } else {
            $('body').removeClass('lock');
        }
    });

    /*-----Products-Slider------*/

    $('.products__items').slick({
        mobileFirst: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
    });

    /*-----Sidebar-Slider------*/

    $('.sidebar__list').slick({
        mobileFirst: true,
        arrows: false,
        slidesToShow: 3,
        swipeToSlide: true,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: "unslick",

            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    swipeToSlide: true,
                }
            }
        ]
    });

    /*-----diagnostics-Slider------*/

    $('.diagnostics__bigphoto').slick({
        infinite: true,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        asNavFor: '.diagnostics__photo',
        arrows: false,
    });

    $('.diagnostics__photo').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.diagnostics__bigphoto',
        arrows: false,
        focusOnSelect: true,
    });




    /*-----Modal------*/

    $('.modal-button').click(function(event){

        event.preventDefault();

        $('.modal').addClass('show');
        $('body').addClass('lock');

    });

    $('.modal__close').click(function(event){

        event.preventDefault();

        $('.modal').removeClass('show');
        $('body').removeClass('lock');

    });

     /*-----Validation------*/

    var validName = false;
    var validPhone = false;


    $("form").submit(function(event){
       event.preventDefault();

        var name = $("#name").val();
        var phone = $("#phone").val();

        if(name == "") {
            $('#name').addClass('error');
            $('.name__error').addClass('active');
        } else {
            validName = true;
            $('#name').removeClass('error');
            $('#name').addClass('accept');
            $('.name__error').removeClass('active');
        }
        if(phone == "") {
            $('#phone').addClass('error');
            $('.phone__error').addClass('active');
        } else {
            validPhone = true;
            $('#phone').removeClass('error');
            $('#phone').addClass('accept');
            $('.phone__error').removeClass('active');
        }

        if(validName == true && validPhone == true){
         $('#name,#phone').removeClass('error');

        $('.modal').removeClass('show');
        $('body').removeClass('lock');
        }
    });


});
