
$(document).ready(function() {
    $(".course-btn").click(function () {
        $(".course").show();
        $(".blog").hide();
        $(".video").hide();
    });
    $(".video-btn").click(function () {
        $(".video").show();
        $(".course").hide();
        $(".blog").hide();
    });
    $(".blog-btn").click(function () {
        $(".blog").show();
        $(".course").hide();
        $(".video").hide();
    });
});