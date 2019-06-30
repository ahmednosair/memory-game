var flag = null,
    fId = null,
    secId = null;
var imgarr = [];
var uimgarr = [];
var bitmap = [];
let backup = null;
let attempts = 0;

function takeAction() {
    uimgarr.length = 0;
    imgarr.length = 0;
    for (let i = 1; i <= 18; i++) {
        uimgarr.push("images/" + i.toString(10) + ".jpg");
        uimgarr.push("images/" + i.toString(10) + ".jpg");
        bitmap.push(false);
        bitmap.push(false);

    }
    for (let i = 0; i < 36; i++) {
        count = Math.floor(Math.random() * uimgarr.length);
        imgarr.push(uimgarr.splice(count, 1)[0]);
    }
}

function peek() {
    for (let i = 1; i <= 36; i++)
        document.getElementById(i.toString(10)).src = imgarr[i - 1];
}

function intiate(id) {
    if (flag == null) return;
    if (flag < 2) flip(id);
    if (flag == 2) handle();
    document.getElementById("L1").innerHTML = "Number of attempts: " + attempts.toString();

}

function displaygrid() {
    for (let i = 1; i <= 36; i++)
        document.getElementById(i.toString(10)).src = "images/mem.jpg";
}

function flip(id) {
    if (bitmap[id - 1] || id == fId) return;
    document.getElementById(id).src = imgarr[id - 1];
    if (fId == null) {
        fId = id;
    } else {
        secId = id;
    }
    flag++;
    attempts++;
}

function handle() {
    flag++;
    if (document.getElementById(fId).src == document.getElementById(secId).src) {
        bitmap[fId - 1] = true;
        bitmap[secId - 1] = true;
    }
    setTimeout(function () {
        if (document.getElementById(fId).src != document.getElementById(secId).src) {
            document.getElementById(fId).src = "images/mem.jpg";
            document.getElementById(secId).src = "images/mem.jpg";
        }
        if (checkwin())
            document.getElementById("L2").innerHTML = "Congratulations! , You have a good memory";

        fId = null;
        secId = null;
        flag = 0;
    }, 500);
}

function checkwin() {
    for (i = 0; i < bitmap.length; i++)
        if (!bitmap[i]) return false;
    clearTime();
    return true;
}

function start() {
    flag = null,
        fId = null,
        secId = null;
    attempts = 0;
    document.getElementById("L2").innerHTML = "";
    document.getElementById("L1").innerHTML = "Number of attempts: " + attempts.toString();
    document.getElementById("L0").innerHTML = "Time taken: 00:00:00";
    document.getElementById("B0").innerHTML = "Restart";
    document.getElementById("L4").innerHTML = "";
    imgarr = [];
    uimgarr = [];
    bitmap = [];
    takeAction();
    peek();
    setTimeout(function () {
        displaygrid();
        flag = 0;
    }, 1000);
    clearTime();
    time();
}

function clearTime() {
    if (backup != null)
        clearInterval(backup);
}

function showTime(secs, mins, hrs) {
    let str = "Time taken: ";
    if (hrs < 10)
        str = str + "0" + hrs.toString() + ":";
    else
        str = hrs.toString + ":";
    if (mins < 10)
        str = str + "0" + mins.toString() + ":";
    else
        str = str + mins.toString() + ":";
    if (secs < 10)
        str = str + "0" + secs.toString();
    else
        str = str + secs.toString();
    return str;
}

function time() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    backup = setInterval(function () {
        seconds++;
        document.getElementById("L0").innerHTML = showTime(seconds, minutes, hours);
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        document.getElementById("L0").innerHTML = showTime(seconds, minutes, hours);
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
        document.getElementById("L0").innerHTML = showTime(seconds, minutes, hours);
    }, 1000);
}
function solve() {
    if (flag != null) {
        peek();
        clearTime();
    }
    else {
        document.getElementById("L4").innerHTML = "Sorry! , You should start a game first";
    }
    flag = null;
}
