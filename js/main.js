$(function () {
    $(window).on('load', function () {
        var $preloader = $('.page-prel'),
            $spinner = $preloader.find('.banter-loader__box');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    $(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
            flankingItems: 3,
            movingToCenter: function ($item) {
                $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
            },
            movedToCenter: function ($item) {
                $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
            },
            movingFromCenter: function ($item) {
                $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
            },
            movedFromCenter: function ($item) {
                $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
            },
            clickedCenter: function ($item) {
                $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
            }
        });

        $('#prev').bind('click', function () {
            carousel.prev();
            return false
        });

        $('#next').bind('click', function () {
            carousel.next();
            return false;
        });

        $('#reload').bind('click', function () {
            newOptions = eval("(" + $('#newoptions').val() + ")");
            carousel.reload(newOptions);
            return false;
        });

    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });


    new WOW().init();

    if ($(window).width() > 960) {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 0,
                                'multiplier': 0.04,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    } else {
        // change functionality for larger screens
    }
//burger
    $('.menu-open').click(function () {
        $('.menu').toggleClass('d-none');
    });

// animated mouseenter
    function animate(elem) {
        var effect = elem.data("effect");
        if (!effect || elem.hasClass(effect)) return false;
        elem.addClass(effect);
        setTimeout(function () {
            elem.removeClass(effect);
        }, 1000);
    }
    $(".animated").mouseenter(function () {
        animate($(this));
    });
});
