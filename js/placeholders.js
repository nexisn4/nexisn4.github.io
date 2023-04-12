$( document ).ready(function() {
    $("#nav-placeholder").load("templates/nav.html");
    $("#footer-placeholder").load("templates/footer.html");
    // console.log(allow_scroll);
});


var allow_scroll = true;
$('#nav-wrap').click(function(e) {
    console.log(allow_scroll);

    if (allow_scroll) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    };

    allow_scroll = !allow_scroll;
    console.log(allow_scroll);
});