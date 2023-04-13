var allow_scroll = true;

$( document ).ready(function() {
    $("#nav-placeholder").load("templates/nav.html");
    $("#footer-placeholder").load("templates/footer.html");
    
    console.log("on load: ", allow_scroll);
    setTimeout(function(){
        $('.mobile-btn').click(function(e) {
            console.log('clicked menu. currently: ', allow_scroll);
            if (allow_scroll) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'auto');
            };
            allow_scroll = !allow_scroll;
            console.log("now: ", allow_scroll);
        });
    }, 3000);
});