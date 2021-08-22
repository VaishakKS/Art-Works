function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    minutes = (minutes < 10 ? "0" : "") + minutes;
    let timeOfDay = hour < 12 ? "AM" : "PM";

    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? 12 : hour;

    let currentTimeStr = hour + ":" + minutes + " " + timeOfDay;

    document.querySelector(".current-time").innerText = currentTimeStr;
}

function date() {
    let date = new Date();
    let dateDetails = date.toString().split(" ");
    document.querySelector(
        ".current-date"
    ).innerText = `${dateDetails[0]}, ${dateDetails[2]} ${dateDetails[1]}`;
}

setInterval(clock, 100);
setInterval(date, 100);

const swipe = document.querySelector(".swipe-text");

swipe.addEventListener("click", (event) => {
    swipe.textContent = "";
    document.querySelector(".current-time").style.cssText = "visibility: hidden;";
    document.querySelector(".current-date").style.cssText = "visibility: hidden;";
    document.querySelector(".img").style.cssText = "opacity: 0.5;";
    document.querySelector(".keypad").innerHTML =
        '<table style="border-collapse:separate;border-spacing: 2rem 0.5em;"><tr><td onclick="selectKey(1)">1</td><td onclick="selectKey(2)">2</td><td onclick="selectKey(3)">3</td></tr><tr><td onclick="selectKey(4)">4</td><td onclick="selectKey(5)">5</td><td onclick="selectKey(6)">6</td></tr><tr><td onclick="selectKey(7)">7</td><td onclick="selectKey(8)">8</td><td onclick="selectKey(9)">9</td></tr></table>';
    document.querySelector(".keypad-input").style.cssText = "display:grid;position:relative;";
    document.querySelector(".keypad-input > input[type=text]").style.cssText =
        "visibility:visible;";
    document.querySelector(".keypad").style.cssText =
        "font-size:45px;justify-self:center;";
    document.querySelector(".pin-label").style.cssText =
        "visibility:visible;position:absolute;bottom:50px;justify-self:center;font-size:20px;";
});

let keysArray = [];
let pin = "";
function selectKey(value) {
    keysArray.push(value);
    if (keysArray.length <= 4) {
        document.querySelector(".input-pin").value += String(value);
        pin += String(value);
    }
    console.log(pin);
    if (pin.length === 4) {
        document.querySelector(".input-pin").value = "";
        document.querySelector(".google-bar").style.cssText =
            "width:200px;height: 50px;background-color: #fff;justify-self: center;border-radius: 25px;visiblity:visible;display: grid;grid-template-columns: 50px 150px;";
        document.querySelector(".keypad").innerHTML = "";
        document.querySelector(".input-pin").style.visibility = "hidden";
        document.querySelector(".pin-label").style.visibility = "hidden";
        document.querySelector(".google-bar").innerHTML =
            '<img src="https://img.icons8.com/fluency/48/000000/google-logo.png" class="google-icon"><form method="get" action="https://www.google.com/search" style="place-self:center;"><input type="text" name="q" size="31" value="" autocomplete="off" class="search"></form>';
        document.querySelector(".search").style.cssText =
            "visibility:visible;border-bottom:none;width:120px;height:40px;color: #000;font-size: 25px;background-color:transparent;";
        document.querySelector(".google-icon").style.cssText =
            "width:40px;height:40px;place-self:center;";
        document.querySelector(".current-time").style.cssText =
            "visibility:visible;position:relative;bottom:50px;";
        document.querySelector(".current-date").style.cssText =
            "visibility:visible;position:relative;bottom:50px;";
    }
}
