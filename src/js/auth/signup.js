const button = document.getElementById("button");

button.addEventListener('click', ()=>{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let user = document.getElementById("user");
    let pass = document.getElementById("password");
    const person = {
        name: name.value,
        email: email.value,
        user: user.value,
        password: pass.value
    }
    console.log(person);
    fetch('http://localhost:3000/user/', {
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
            if(success.message){
                console.log(success.message);
                Swal.fire({
                    icon: 'success',
                    title: 'Cuenta creada exitosamente!',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=>{
                    window.location.href = "../views/signin.html"
                  });
                
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'El usuario y/o correo ya ha sido registrado!',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }         
            
        }
    ).catch(
        error => console.log(error)
    );
});


function verifySession() {
    if (window.sessionStorage.getItem('isLoggedin')) {
        window.location.href = "../views/main.html"
    } else {
        console.log('No hay datos');
    }
}

verifySession();