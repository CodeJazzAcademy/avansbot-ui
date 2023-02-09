/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

let tgWA = window.Telegram.WebApp;
tgWA.expand()

tgWA.MainButton.textColor = "#FFFFFF";
tgWA.MainButton.color = "#00FF00";

let item = "";

let btn1 = document.getElementById("button1");

btn1.addEventListener("click", function() {
    if (tgWA.MainButton.isVisible) {
        tgWA.MainButton.hide();
    } else {
        tgWA.MainButton.setText("Button 1 clicked");
        item = "1";
        tgWA.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tgWA.sendData(item);
});