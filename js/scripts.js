
//COOKIE
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


$(document).ready(function () {

    console.log(getCookie("cookie"));

    if (getCookie("cookie") == "true") {
        $(".cookie").remove();
    }

    //COOKIES-BUTTON
    $(".button-close").click(function () {
        $(".cookie").addClass("close");
        document.cookie = "cookie=true";
    });
//COOKIE


//HEADER

    $(".dropdown-toggle").click(function () {
        $(".dropdown-menu").toggleClass("open");
    });

    $('.dropdown-menu').click(function (event) {
        event.stopPropagation();
    });

    $(document).click(function (e) {
        var target = e.target;
        if (!$(target).is(".dropdown-toggle") && !$(target).parents().is(".dropdown-toggle")) {
            $(".dropdown-menu").removeClass("open");
        }
    });


//HEADER


//INFORM


    $('.switch').click(function () {
        if ($(this).hasClass('right')) {
            $(this).removeClass('right');
        } else {
            $('.switch').removeClass('right');
            $(this).addClass('right');
        }
    });

    $('.accordion-container').hide();
    $('.accordion-toggle').click(function () {
        if ($(this).next().not(':hidden')) {
            $('.accordion-toggle').next().slideUp(500);
        }

        if ($(this).next().is(':hidden')) {
            $('.accordion-toggle').next().slideUp(500);
            $(this).next().slideDown(500);
        }
        return false;
    });


});

//change-color-inform
$(document).ready(function () {

//chenge class in HTML

    $(".accordion").click(function () {
        $(".accordion-color").toggleClass("changeColor");
    });

});


$(document).ready(function () {

//chenge class in HTML

    $(".accordion").click(function () {
        $(".arrow").toggleClass("changeColor");
    });

});


//change-color-inform

//INFORM



//smoothscroll

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 30
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

});






