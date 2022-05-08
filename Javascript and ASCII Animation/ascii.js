var option;
var size;
var speed = 250;
var id, id2;
function myAnim() {
    if ($("#selec").val() !== "BLANK") {
        let txt = ANIMATIONS[option].split("=====\n");
        var xCnt = -1;
        id = window.setInterval(function animateOneByOne() {

            xCnt += 1;
            if (xCnt < txt.length) {
                $("#animation")
                    .val("")
                    .val(txt[xCnt])
                    .animateOneByOne();
            }
            else
                xCnt = -1
        }, speed);
        $("#start").off("click");
        animateOneByOne();
    }

}
$(document).ready(function () {

    var textValue = "";
    option = $("#selec").val();

    $("#start").on("click", function () {
        if ($("#speed").is(':checked')) {
            speed = 50;
            myAnim();
        }
        else {
            speed = 250;
            myAnim();
        }
        size = $("#size").val();
        $("#animation").val("");
        myAnim();
    });

    $("#stop").click(function () {
        $("#start").on("click", myAnim);
        window.clearInterval(id);
        $("#animation").val(textValue);
    });

    $("#animation").on("keyup keydown paste", function () {
        textValue = $(this).val();
    });
    $("#selec").on("change", function () {
        option = $(this).val();
    });
    $("#size").on("change", function () {
        size = $(this).val();
        $("#animation").css("font-size", size);
    });

    $("#speed").click(function () {
        window.clearInterval(id);
        if ($(this).is(':checked')) {
            speed = 50;
            myAnim();
        }
        else {
            speed = 250;
            myAnim();
        }

    });

});