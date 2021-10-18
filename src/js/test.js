let text = document.getElementById('nick');
let item = document.getElementById('item-song');


let index = 0;
let songs = ['6158e35c14bd13c81b4f8aff', '6158e31f14bd13c81b4f8ae4', '615c5743e6a5ee6d8e05c6ce'];
let isplaying = false;
let sound = plays(songs[index]);
let timeC = 10;
sound.play();


function next() {
  index = index + 1;
  if (index > (songs.length - 1)) {
    index = 0;
  }
  sound = plays(songs[index]);
  sound.play();

}
function plays(id) {
  let sound = new Howl({
    src: ['https://api-audio.herokuapp.com/songs/' + id],
    html5: true,
    preload: 'auto',

  });
  sound.on('play', function () {
    //dura.textContent = "hola";
    isplaying = true;
    getDuration('https://api-audio.herokuapp.com/songs/' + songs[index], function (duration) {
      timeC = duration;
    });
    seekBar();
  });
  sound.on('end', function () {
    next();
  });
  return sound;
}
function seekBar() {
  let dura = document.getElementById('duration');
  let txtdu = document.getElementById("txtduration");
  if (isplaying) {
    let currentscond = sound.seek();
    let duration = sound.duration();
    let a = currentscond / sound.duration() * 100;
    let b = (sound.duration() / 60).toFixed(2);
    console.log(currentscond);
    dura.textContent = currentscond;
    let time = (currentscond * 100) / timeC;
    txtdu.value = time;
    setTimeout(function () {
      seekBar()
    }, 1000)
  }
}
function seekSong() {
  let txtdu = document.getElementById("txtduration").value;
  let time = (txtdu * timeC) / 100;
  sound.seek(time);
}
let getDuration = function (url, next) {
  var _player = new Audio(url);
  _player.addEventListener("durationchange", function (e) {
    if (this.duration != Infinity) {
      var duration = this.duration
      _player.remove();
      next(duration);
    };
  }, false);
  _player.load();
  _player.currentTime = 24 * 60 * 60; //fake big time
  _player.volume = 0;
  _player.play();
  //waiting...
};

function verifySession() {
  if (window.sessionStorage.getItem('isLoggedin')) {
    console.log(window.sessionStorage.getItem('token'));
    /*let obj = JSON.parse(window.sessionStorage.getItem('token'));
    text.textContent = text.textContent + obj.user;*/

  } else {
    window.location.href = "../views/login.html"
  }
}

verifySession();

