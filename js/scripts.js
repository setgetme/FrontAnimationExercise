$(function () {
    var toTop = $(".toTop span");
    toTop.click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
        $('body').animate({
            scrollTop: 0
        }, 1000);
    })

    var images = $(".photo");
    images.hover(function () {
        images.clearQueue();
        for (var i = 0; i < images.length; i++) {
            if (images[i] != $(this)[0]) {
                images.eq(i).animate({
                    opacity: 0.5
                }, 1000);
            }
        }
    }, function () {
        images.clearQueue();
        images.animate({
            opacity: 1
        }, 1000);

    });

    $(window).scroll(function () {
        toTop.addClass('animated')
        if ($(this).scrollTop() >= 800) {
            toTop.addClass('bounceIn');
            toTop.removeClass('fadeOut');
            toTop.addClass('click');

        } else {
            toTop.addClass('fadeOut');
            toTop.removeClass('bounceIn');
            toTop.removeClass('click');
        }

        $(".square").each(function () {
            if ($(this).isInViewport()) {
                $(this).addClass('animated');
                $(this).addClass('jedziemy');
                var square = $(this);
                setTimeout(function () {
                    square.addClass('bottom');
                }, 2000);
            }
        })
    })
})

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
