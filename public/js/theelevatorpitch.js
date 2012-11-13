$(function() {
    $(".btn-start").click(function () {
        return scrollDown($(".section-form"));
    });

    $(".btn-try").click(function () {
        return scrollDown($(".section-try"));
    });

    function scrollDown(obj) {
        var top = obj.offset().top;
        $('html,body').animate({ scrollTop: top }, 'fast');
        return false;
    }
});
