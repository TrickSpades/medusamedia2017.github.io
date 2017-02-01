var showPage = function(page) {
    var about = document.getElementById("about");
    var photos = document.getElementById("photos");
    var videos = document.getElementById("videos");
    var web = document.getElementById("web");

    $("#about-btn").removeClass("current");
    $("#photos-btn").removeClass("current");
    $("#videos-btn").removeClass("current");
    $("#web-btn").removeClass("current");

    switch(page) {
        case "about":
            about.style.display = "block";
            $("#about-btn").addClass("current");
            break;
        case "photos":
            photos.style.display = "block";
            $("#photos-btn").addClass("current");
            break;
        case "videos":
            videos.style.display = "block";
            $("#videos-btn").addClass("current");
            break;
        case "web":
            web.style.display = "block";
            $("#web-btn").addClass("current");
            break;
    }
}

var hidePages = function() {
    var about = document.getElementById("about")
    var photos = document.getElementById("photos");
    var videos = document.getElementById("videos");
    var web = document.getElementById("web");

    about.style.display = "none";
    photos.style.display = "none";
    videos.style.display = "none";
    web.style.display = "none";
}

var setupButtons = function() {
    var about = document.getElementById("about-btn");
    var photos = document.getElementById('photos-btn');
    var videos = document.getElementById('videos-btn');
    var web = document.getElementById('web-btn');

    about.onclick = function() {
        hidePages();
        showPage("about");
    }

    photos.onclick = function() {
        hidePages();
        showPage("photos");
    }

    videos.onclick = function() {
        hidePages();
        showPage("videos");
    }

    web.onclick = function() {
        hidePages();
        showPage("web");
    }
}

$(document).ready(function() {
    setupButtons();
})
