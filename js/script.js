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
    setupButtons();
})
