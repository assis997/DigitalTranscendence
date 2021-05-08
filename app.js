let ua = window.navigator.userAgent;
let iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
let webkit = !!ua.match(/WebKit/i);
let iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

function playVid() {
    let vid = document.getElementById("bgvid");
    let cover = document.getElementById("cover");
    vid.play();
    cover.classList.add("hide");
};

function moveVid() {
    let video = document.getElementById("bgvid");
    video.classList.add("moveUp");
}

if(navigator.userAgent.includes("Instagram")){
    let redirect = document.getElementById("redirect");
    redirect.classList.remove("hide");
}

if (iOSSafari == true) {
    console.log("iOS Safari");
    moveVid();
};

console.log(ua)