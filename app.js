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