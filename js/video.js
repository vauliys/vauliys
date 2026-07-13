const player1 = document.querySelector(".video-player-01");
const player2 = document.querySelector(".video-player-02");
const player3 = document.querySelector(".video-player-03");
const player4 = document.querySelector(".video-player-04");
const player5 = document.querySelector(".video-player-05");
const player6 = document.querySelector(".video-player-06");
const player7 = document.querySelector(".video-player-07");
const player8 = document.querySelector(".video-player-08");


const play1 = player1.querySelector(".play-01");
const play2 = player2.querySelector(".play-02");
const play3 = player3.querySelector(".play-03");
const play4 = player4.querySelector(".play-04");
const play5 = player5.querySelector(".play-05");
const play6 = player6.querySelector(".play-06");
const play7 = player7.querySelector(".play-07");
const play8 = player8.querySelector(".play-08");


const video1 = player1.querySelector(".video-01");
const video2 = player2.querySelector(".video-02");
const video3 = player3.querySelector(".video-03");
const video4 = player4.querySelector(".video-04");
const video5 = player5.querySelector(".video-05");
const video6 = player6.querySelector(".video-06");
const video7 = player7.querySelector(".video-07");
const video8 = player8.querySelector(".video-08");


play1.addEventListener("click", () => {
    if (video1.paused) {
        video1.play();
        play1.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video1.pause();
        play1.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

});
video1.addEventListener("ended", () => {
    play1.innerHTML = '<i class="fa-solid fa-play"></i>';
    video1.currentTime = 0;
});

play2.addEventListener("click", () => {
    if (video2.paused) {
        video2.play();
        play2.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video2.pause();
        play2.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});
video2.addEventListener("ended", () => {
    video2.innerHTML = '<i class="fa-solid fa-play"></i>';
    video1.currentTime = 0;
});

play3.addEventListener("click", () => {
    if (video3.paused) {
        video3.play();
        play3.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video3.pause();
        play3.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});
video3.addEventListener("ended", () => {
    play3.innerHTML = '<i class="fa-solid fa-play"></i>';
    video3.currentTime = 0;
});

play4.addEventListener("click", () => {
    if (video4.paused) {
        video4.play();
        play4.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video4.pause();
        play4.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});
video4.addEventListener("ended", () => {
    play4.innerHTML = '<i class="fa-solid fa-play"></i>';
    video4.currentTime = 0;
});

play5.addEventListener("click", () => {
    if (video5.paused) {
        video5.play();
        play5.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video5.pause();
        play5.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});
video5.addEventListener("ended", () => {
    play5.innerHTML = '<i class="fa-solid fa-play"></i>';
    video5.currentTime = 0;
});

play6.addEventListener("click", () => {
    if (video6.paused) {
        video6.play();
        play6.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video6.pause();
        play6.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});
video6.addEventListener("ended", () => {
    play6.innerHTML = '<i class="fa-solid fa-play"></i>';
    video6.currentTime = 0;
});

play7.addEventListener("click", () => {
    if (video7.paused) {
        video7.play();
        play7.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video7.pause();
        play7.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});
video7.addEventListener("ended", () => {
    play7.innerHTML = '<i class="fa-solid fa-play"></i>';
    video7.currentTime = 0;
});

play8.addEventListener("click", () => {
    if (video8.paused) {
        video8.play();
        play8.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video8.pause();
        play8.innerHTML = '<i class="fa-solid fa-play"></i>';

    }
});
