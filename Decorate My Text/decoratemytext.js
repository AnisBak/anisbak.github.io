

function popup() {

    alert("Hello Wordl!");

}

function largerText() {
    var textarea = document.getElementById("textarea");
    var style = window.getComputedStyle(textarea);
    var size = parseFloat(style.getPropertyValue("font-size"));
    size = 3 / 4 * size;
    size += 2;
    textarea.style.fontSize = size + "pt";

}
let timer = null;
function largerTextTimer() {

    if (timer === null) {
        timer = setInterval(largerText, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }


}
function styletext() {
    var textarea = document.getElementById("textarea");
    var checkbox = document.getElementById("checkbox");
    var body = document.getElementById("body");
    if (checkbox.checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "green";
        textarea.style.textDecoration = "underline";
        body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHgPMNwa3REKdqbHnFeA0rH-CdMc88PC6Qg&usqp=CAU')";
    }
    else {
        textarea.style.fontWeight = "normal";
    }
}

function attachEvents() {
    var button = document.getElementById("button");
    //button.onclick = largerText;
    button.onclick = largerTextTimer;
    var checkbox = document.getElementById("checkbox");
    //checkbox.onchange = popup;
    checkbox.onchange = styletext;

}

window.onload = attachEvents;
