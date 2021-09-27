
let text = document.getElementById('nick');

if(window.sessionStorage.getItem('isLoggedIn')){
    let obj = JSON.parse(window.localStorage.getItem('user'));
    text.textContent = text.textContent + obj.user;

}else{
    window.location.href = "../views/login.html"
}