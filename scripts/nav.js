$(document).ready(function() {
    loadPage('welcome');
});

function loadPage(page) {
    toggleContent();
    $.ajax({
        url: "/pages/" + page + ".html",
        type: "GET",
        dataType: "html"
    }).done(function(data) {
        document.getElementById('content').innerHTML = data;
        toggleContent();
    }).fail(function(err) {
        console.log("Failed to load a page!");
        console.log(err);
    });
}

function toggleContent() {
    $('#content').toggleClass('hidden');
    console.log("toggled");
}

function toggleSidebar() {
    $('#sidebar').toggleClass('open');
    $('#content').toggleClass('open');
}