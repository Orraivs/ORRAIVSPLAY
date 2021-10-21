const button = document.getElementById("button");
const fpass = document.getElementById("Fpassword");
button.addEventListener('click', ()=>{
    let user = document.getElementById("user");
    let pass = document.getElementById("password");
    const person = {
        user: user.value,
        password: pass.value
    }
    console.log(person);
    fetch('https://api-cusers.herokuapp.com/auth/signin', {
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
                Swal.fire({
                    icon: 'success',
                    title: 'Sesion iniciada!',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=>{
                    verifySession();
                  });
                
            }else{
                //ERROR
                Swal.fire({
                    icon: 'error',
                    title: 'Credenciales incorrectas!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }         
            
        }
    ).catch(
        error => console.log(error)
    );
});

fpass.addEventListener('click', ()=>{
    Swal.fire({
        icon: 'error',
        title: 'Que pendejo jajaja!',
        showConfirmButton: false,
        timer: 1800
      })
})

function verifySession() {
    if (window.sessionStorage.getItem('isLoggedin')) {
        window.location.href = "../views/main.html"
    } else {
        console.log('No hay datos');
    }
}

verifySession();