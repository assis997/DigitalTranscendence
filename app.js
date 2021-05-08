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

function hideRedirect() {
    document.getElementById("appBrowser").classList.add("hide");
}

function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf('Instagram') > -1);
}

if (isFacebookApp == true) {
    console.log("app");
}

if (isFacebookApp !== true) {
    console.log("no app");
    hideRedirect();
}