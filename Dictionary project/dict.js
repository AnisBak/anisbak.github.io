$(document).ready(() => {

    $("#searchResultLoader").hide();

    $("#lookupBtn").click(() => {

        $("#searchResultDiv").text("");
        $("#searchResultLoader").show();

        $("#lookupBtn").prop("disabled", true);
        lookup();
    });
});

function lookup() {

    $.ajax({
        url: "app",
        type: "POST",
        data: {
            word: $("#word").val()
        },
        dataType: "json",
        "success": show,
        "error": noShow
    });
}
function show(data) {
    if (data.length === 0)
        $("#searchResultDiv").append("<p> Nothing to show </p>");
    $.each(data, function (i, item) {
        $("#searchResultDiv").append("<p>"+ (i + 1) + "(" + item.wordtype + ") :: " + " " + item.definition + "</p>");
    })
    $("#searchResultLoader").hide();
    $("#lookupBtn").prop("disabled", false);
}
function noShow() {
    $("#searchResultDiv").append("<p> Nothing to show</p>");
}