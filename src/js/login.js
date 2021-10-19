const button = document.getElementById("button");

button.addEventListener('click', validate);

function validate() {
    let user = document.getElementById("user");
    let pass = document.getElementById("password");
    const person = {
        user: user.value,
        password: pass.value
    }
    fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    }).then(
        response => response.json()
    ).then(
        success => {
            if(success.token){
                window.sessionStorage.setItem('token', success.token);
                window.sessionStorage.setItem('isLoggedin', true);
                verifySession();
            }else{
                //ERROR
            }         
            
        }
    ).catch(
        error => console.log(error)
    );

}
function verifySession() {
    if (window.sessionStorage.getItem('isLoggedin')) {
        window.location.href = "../views/main.html"
    } else {
        console.log('No hay datos');
    }
}

verifySession();