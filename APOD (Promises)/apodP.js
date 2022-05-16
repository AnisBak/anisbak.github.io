$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
function getPicture() {
    var date = $("#date").val();
    fetch("https://api.nasa.gov/planetary/apod?api_key=AKHgPBLvEQQbx2TN9xhrfC0tDg5obdRwHyP6rccH&date="+date)
        .then(data => data.json())
        .then(data => {
            $("#title").text(data.title);
            $("#pic").attr("src", data.url);
        }).catch(error => alert(error));
    
    

    /*$.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "AKHgPBLvEQQbx2TN9xhrfC0tDg5obdRwHyP6rccH",
            date: $("#date").val()

        },
        dataType: "json",
        "success": showPicture,
        "error": noPicture
    });*/
};
/*
function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").text(data.title);

};
function noPicture(error) {
    alert(error.responseText);
};*/
