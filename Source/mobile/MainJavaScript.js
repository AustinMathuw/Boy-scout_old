var main = function () {
    /* Push the body and the nav over by 400px over */
    $('.menu_text').click(function () {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "600px"
        }, 200);
    });

    /* Then push them back */
    $('.menu-close').click(function () {
        $('.menu').animate({
            left: "-600px"
        }, 200);

        $('body').animate({
            left: "0px"
        }, 200);
    });
};


$(document).ready(main);
