var allow_scroll = true;

$( document ).ready(function() {
    $("#nav-placeholder").load("templates/nav.html");
    $("#footer-placeholder").load("templates/footer.html");

    $('#nav-wrap').click(function(e) {
        console.log('clicked', allow_scroll);
        if (allow_scroll) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        };
        allow_scroll = !allow_scroll;
    });
});


