var main = function () {
    /* Push the body and the nav over by 400px over */
    $('.menu_text').click(function () {
        $('.menu').animate({
            left: "0px"
        }, .0001);

        $('body').animate({
            left: "600px"
        }, .1);
    });

    /* Then push them back */
    $('.menu-close').click(function () {
        $('.menu').animate({
            left: "-600px"
        }, .1);

        $('body').animate({
            left: "0px"
        }, .0001);
    });
};


$(document).ready(main);
