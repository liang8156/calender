var text = "";
for (j = 1; j < 10; j++) {
    for (i = 1; i < 10; i++) {
        text += "&nbsp&nbsp&nbsp" + i + "*" + j + "=" + i * j;
        if (i * j < 10) {
            text += "&nbsp&nbsp";
        }
    }
    text += "<br>";
}
document.getElementById("content").innerHTML = text;
//note:一個數字=2個&nbsp