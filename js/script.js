var handleModal = function() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("cta");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

var showPage = function(page) {
    var web = document.getElementById("web");
    var photos = document.getElementById("photos");
    var videos = document.getElementById("videos");

    $("#web-btn").removeClass("current");
    $("#photos-btn").removeClass("current");
    $("#videos-btn").removeClass("current");

    switch(page) {
        case "web":
            web.style.display = "block";
            $("#web-btn").addClass("current");
            break;
        case "photos":
            photos.style.display = "block";
            $("#photos-btn").addClass("current");
            break;
        case "videos":
            videos.style.display = "block";
            $("#videos-btn").addClass("current");
            break;
    }

    console.log(page);
}

var hidePages = function() {
    var web = document.getElementById("web");
    var photos = document.getElementById("photos");
    var videos = document.getElementById("videos");

    web.style.display = "none";
    photos.style.display = "none";
    videos.style.display = "none";
}

var setupButtons = function() {
    var web = document.getElementById('web-btn');
    var photos = document.getElementById('photos-btn');
    var videos = document.getElementById('videos-btn');

    web.onclick = function() {
        hidePages();
        showPage("web");
    }

    photos.onclick = function() {
        hidePages();
        showPage("photos");
    }

    videos.onclick = function() {
        hidePages();
        showPage("videos");
    }
}

$(document).ready(function() {
    handleModal();
    setupButtons();
})
