const player = document.getElementById('player'),
      buttonPlay = document.getElementById('play-pause'),
      pauseOrPlay = document.querySelector('.play'),
      audio = document.querySelector('.audio'),
      nameOfsong = document.querySelector('.name'),
      background = document.querySelector('.background'),
      img = document.querySelector('.img'),
      nextButton = document.querySelector('.but-next'),
      prewButton = document.querySelector('.but-prew')

//
const masOfTreks = ['Meliza', 'Hot girl bummer', 'This Year'];
let index = 0;
let isPlay = false;
function playMusic() {
    if(isPlay) {
        pauseOrPlay.src = './assets/svg/play.svg'
        audio.pause();
        isPlay = false;
    } else {
        pauseOrPlay.src = './assets/svg/pause.svg'
        audio.play();
        isPlay = true;
        console.log(pauseOrPlay);
    }
}

function music() {
    player.classList = `player${index + 1}`
    nameOfsong.innerHTML = masOfTreks[index];
    background.src = `./assets/img/cover${index + 1}.jpg`;
    img.src = `./assets/img/cover${index + 1}.jpg`;
    audio.src = `./assets/audio/song${index + 1}.mp3`
    pauseOrPlay.src = './assets/svg/pause.svg';
    isPlay = true;
    audio.currentTime = 0;
    audio.play();
}

function nextSong() {
    if (index < masOfTreks.length - 1) {
        index += 1;
    } else {
        index = 0;
    }
    music()
}

function prewSong() {
    if (index > 0) {
        index -= 1;
    } else {
        index = masOfTreks.length - 1;
    }
    music()
}
nextButton.addEventListener('click', nextSong);
buttonPlay.addEventListener('click', playMusic);
prewButton.addEventListener('click', prewSong);
