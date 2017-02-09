// Page Scrolling
$(document).on('click', '.page-link', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

$(document).ready(function() {
    $("#nav-modal-text a").click(function() {
        $(".close-nav-modal").click();
    })

    $(".lazy").viewportChecker({
        classToAdd: "visible",
        classToRemove: "lazy"
    });
});
