function validate(){
    let user = document.getElementById("user");
    let pass = document.getElementById("password");

    const person = {
        user: user.value,
        pass: pass.value
    }
    window.sessionStorage.setItem('user', JSON.stringify(person));
}

if(window.sessionStorage.getItem('user')){
    window.location.href = "../views/main.html"

}else{
    console.log('No hay datos');   
}