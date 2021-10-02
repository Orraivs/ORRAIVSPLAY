let text = document.getElementById('nick');
let item = document.getElementById('item-song');


let index = 0;
let songs = ['6153204d05674c16c4e65024','6152229869312205e47ce853','615222ca69312205e47ce86a'];
let isplaying = false;
let sound = plays(songs[index]);
let timeC = 10;  
sound.play();
  
  
function next(){
    index=index+1;
    if(index>(songs.length-1)){
      index=0;
    }
    sound = plays(songs[index]);
    sound.play();
    
}
function plays(id){
    let sound = new Howl({
        src: ['http://localhost:3000/tracks/'+id],
        html5: true,
        preload: 'none',

      });
      sound.on('play', function(){
        //dura.textContent = "hola";
        isplaying = true;
        getDuration ('http://localhost:3000/tracks/'+songs[index], function (duration) {
          timeC = duration;                             
        });
        seekBar();
      });
      sound.on('end', function(){
        next();
      });
    return sound;
}
function seekBar(){
  let dura = document.getElementById('duration');
  let txtdu = document.getElementById("txtduration");
    if(isplaying){
        let currentscond = sound.seek();
        let duration = sound.duration();
        let a = currentscond / sound.duration() * 100;
        let b = (sound.duration() / 60).toFixed(2);
        console.log(currentscond);
        dura.textContent = currentscond;
        let time = (currentscond*100) / timeC;
        txtdu.value = time;
        setTimeout(function(){
            seekBar()
        }, 1000)
    }
}
function seekSong(){
    let txtdu = document.getElementById("txtduration").value;
    let time = (txtdu*timeC)/100;
    sound.seek(time);
}
let getDuration = function (url, next) {
  var _player = new Audio(url);
  _player.addEventListener("durationchange", function (e) {
      if (this.duration!=Infinity) {
         var duration = this.duration
         _player.remove();
         next(duration);
      };
  }, false);      
  _player.load();
  _player.currentTime = 24*60*60; //fake big time
  _player.volume = 0;
  _player.play();
  //waiting...
};


if(window.sessionStorage.getItem('isLoggedIn')){
    let obj = JSON.parse(window.localStorage.getItem('user'));
    text.textContent = text.textContent + obj.user;

}else{
    window.location.href = "../views/login.html"
}