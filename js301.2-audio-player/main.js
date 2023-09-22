const player = document.getElementById('player'),
      buttonPlay = document.getElementById('play-pause'),
      pauseOrPlay = document.querySelector('.play'),
      audio = document.querySelector('.audio'),
      nameOfsong = document.querySelector('.name'),
      background = document.querySelector('.background'),
      img = document.querySelector('.img'),
      nextButton = document.querySelector('.but-next'),
      prewButton = document.querySelector('.but-prew'),
      progressButton = document.querySelector('.progress'),
      progressConteiner = document.querySelector('.progress-conteiner')
//seconds
const rightTime = (time) => (time < 10 ? `0${time}` : time)
function toMinutes(seconds) {
    let minutes = rightTime(Math.floor(seconds / 60));
    // let min = Math.floor(seconds / 60)
    let sec = rightTime(Math.floor(seconds - minutes * 60))
    return `${minutes}:${sec}`
}
// play music
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
// change the music
function music() {
    nameOfsong.innerHTML = masOfTreks[index];
    background.src = `./assets/img/cover${index + 1}.jpg`;
    img.src = `./assets/img/cover${index + 1}.jpg`;
    audio.src = `./assets/audio/song${index + 1}.mp3`
    pauseOrPlay.src = './assets/svg/pause.svg';
    player.classList = `player${index + 1}`
    isPlay = true;
    audio.currentTime = 0;
    audio.play();
}
//next
function nextSong() {
    if (index < masOfTreks.length - 1) {
        index += 1;
    } else {
        index = 0;
    }
    music()
}
//prew
function prewSong() {
    if (index > 0) {
        index -= 1;
    } else {
        index = masOfTreks.length - 1;
    }
    music()
}

// progress
function progress(e) {
    const {duration, currentTime} = e.srcElement;
    document.querySelector('.time-finish').innerHTML = toMinutes(duration);
    document.querySelector('.time-start').innerHTML = toMinutes(currentTime);
    progressButton.style.width = `${currentTime / duration * 100}%`
}
// set progress
function reaudio(event) {
    const conteinerLong = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / conteinerLong) * duration;
    pauseOrPlay.src = './assets/svg/pause.svg'
    audio.play();
    isPlay = true;
}
audio.addEventListener('ended', nextSong)
progressConteiner.addEventListener('click', reaudio)
audio.addEventListener('timeupdate', progress)
nextButton.addEventListener('click', nextSong);
buttonPlay.addEventListener('click', playMusic);
prewButton.addEventListener('click', prewSong);