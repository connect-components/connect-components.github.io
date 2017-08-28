/// <reference path="jquery-1.4.2.min.js" />
var xPos = parseInt(window.screen.availWidth * Math.random());
var yPos = parseInt(window.screen.availHeight * Math.random());
var xon = 0;
var yon = 0;
function changePos(obj) {
    var clientW = window.screen.availWidth - 20;
    var clientH = window.screen.availHeight - 100;
    var offsetW = document.getElementById(obj).offsetWidth;
    var offsetH = document.getElementById(obj).offsetHeight;
    document.getElementById(obj).style.left = xPos + document.body.scrollLeft;
    document.getElementById(obj).style.top = yPos + document.body.scrollTop;

    if (xon) { xPos = xPos + 1; } else { xPos = xPos - 1; }
    if (xPos < 0) { xon = 1; xPos = 0; }
    if (xPos >= (clientW - offsetW)) { xon = 0; xPos = (clientW - offsetW); }

    if (yon) { yPos = yPos + 1; } else { yPos = yPos - 1; }
    if (yPos < 0) { yon = 1; yPos = 0; }
    if (yPos >= (clientH - offsetH)) { yon = 0; yPos = (clientH - offsetH); }
}
function floatAd(obj) {
    window.setInterval("changePos('" + obj + "')", "15");
}


var lastScrollY = 0;
function distichAd(obj1, obj2) {
    var diffY;
    if (document.documentElement && document.documentElement.scrollTop)
        diffY = document.documentElement.scrollTop;
    else if (document.body)
        diffY = document.body.scrollTop
    else
    { /*Netscape stuff*/ }
    percent = .1 * (diffY - lastScrollY);
    if (percent > 0) percent = Math.ceil(percent);
    else percent = Math.floor(percent);
    document.getElementById(obj1).style.top = parseInt(document.getElementById(obj1).style.top) + percent + "px";
    document.getElementById(obj2).style.top = parseInt(document.getElementById(obj2).style.top) + percent + "px";
    lastScrollY = lastScrollY + percent;
}
function initEcAd(obj1, obj2) {
    window.setInterval("distichAd('" + obj1 + "','" + obj2 + "')", 1);
}
var adTimer;
var cur_img = -1;

function PicHover(obj1, obj2, obj3, obj4) {
    var n = 0;
    var m = 0;
    var k = 0;
    var aCount = $(obj1 + " ul li").length;
    $(obj1 + " ul li").mouseover(function () {
        var i = $(obj1 + " ul li").index(this);
        PicRoll(obj1, obj2, i);
    });

    $(obj1).hover(function () {
        clearInterval(adTimer);
    }, function () {
        adTimer = setInterval(function () {
            n++;
            if (n == aCount) { n = 0 };
            PicRoll(obj1, obj2, n);
        }, 8000);
    }).trigger("mouseleave");


    $(obj3).click(function () {
        cur_img++;
        if (cur_img == aCount) { cur_img = 0; }
        PicRoll(obj1, obj2, cur_img);
    });

    $(obj3).mouseover(function () {
        $('.next').css({ 'opacity': 0.5 });
    });

    $(obj3).mouseout(function () {
        $('.next').css({ 'opacity': 0.2 });
        clearInterval(adTimer);
    }, function () {
        adTimer = setInterval(function () {
            m++;
            if (m == aCount) { m = 0 };
            PicRoll(obj1, obj2, m);
        }, 8000);
    }).trigger("mouseleave");

    $(obj4).click(function () {
        cur_img--;
        if (cur_img < 0) { cur_img = $(obj1 + " ul li").length - 1; }
        PicRoll(obj1, obj2, cur_img);
    });

    $(obj4).mouseover(function () {
        $('.prev').css({ 'opacity': 0.5 });
    });

    $(obj4).hover(function () {
        $('.prev').css({ 'opacity': 0.2 });
        clearInterval(adTimer);
    }, function () {
        adTimer = setInterval(function () {
            k++;
            if (k == aCount) { k = 0 };
            PicRoll(obj1, obj2, k);
        }, 8000);
    }).trigger("mouseleave");
}


function PicRoll(obj1, obj2, i) {
    cur_img = i;
    $(obj1 + " ul li").attr("class", "normal");
    $(obj1 + " ul li").eq(i).attr("class", "selected");

    $(obj2 + " ul li").hide();
    $(obj2 + " ul li").eq(i).fadeIn("normal");
}
function Stoptrigger() {
    clearInterval(adTimer);
}
function startrigger(obj1, obj2) {
    var n = 0;
    var aCount = $(obj1 + " ul li").length;
    adTimer = setInterval(function () {
        n++;
        if (n == aCount) { n = 0 };
        PicRoll(obj1, obj2, n);
    }, 8000);
}