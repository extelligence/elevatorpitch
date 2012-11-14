$(function() {
    function scrollPage(top) {
        $('html,body').animate({ scrollTop: top }, 'normal');
        return false;
    }

    function initProgress(time) {
        $('#progress_bar').remove();
        $('.progress').append(
            $('<div class="bar bar-success" id="progress_bar" style="width:0%"/>')
        );
        $('#remaining_sec').text(time);
    }

    var timelimit_sec = 5;
    var timer_id      = null;

    initProgress(timelimit_sec);

    $('#btn_count_start').click(function() {
        var interval_msec  = 250;
        var timelimit_msec = timelimit_sec * 1000;
        var elapsed_msec   = 0;

        initProgress(timelimit_sec);
        $('.toggle').toggle();

        timer_id = setInterval(function() {
                elapsed_msec += interval_msec;
                var progress      = Math.round((elapsed_msec / timelimit_msec) * 100);
                var remaining_sec = Math.ceil((timelimit_msec - elapsed_msec) / 1000);
                if (elapsed_msec >= timelimit_msec) {
                    progress = 100;
                }
                if (progress == 100) {
                    remaining_sec = 0;
                    clearInterval(timer_id);  
                    $('.toggle').toggle();
                }
                $('#progress_bar').css('width', progress + '%');
                $('#remaining_sec').text(remaining_sec);
            },
            interval_msec
        );
    }); 

    $('#btn_count_stop').click(function() {
        initProgress(timelimit_sec);
        clearInterval(timer_id);  
        $('.toggle').toggle();
    });

    $('.btn-scroll-down').click(function () {
        if ($(this).attr('id') == 'btn-submit') {
            var empty = false;
            $(':text').each(function() {
                if ($(this).val().length <= 0) {
                    empty = true;
                    return false;    
                }
            });
            if (empty == true) {
                return false; 
            }
        }
        var i = $('.btn-scroll-down').index(this)
        var p = $('hr').eq(i + 1).offset().top;
        return scrollPage(p);       
    });

    $('.btn-scroll-up').click(function () {
        var i = $('.btn-scroll-up').index(this)
        var p = $('hr').eq(i + 1).offset().top;
        return scrollPage(p);       
    });

    $('#btn-submit').click(function() {
        var texts = $(':text');
        var pongs = $('.pong');
        $.each(texts, function(index, _) {
            pongs.eq(index).text($(this).val())
        });
    }); 
});
