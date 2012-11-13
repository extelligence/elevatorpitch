$(function() {
    $(".btn-start").click(function () {
        var p = $(".section-form").offset().top;
        $('html,body').animate({ scrollTop: p }, 'fast');
        return false;
    });
});
