
/*const upload = () => {fetch('https://api-audio.herokuapp.com/songs/1').then(
    response => response.json() // if the response is a JSON object
).then(
    success => console.log(success) // Handle the success response object
).catch(
    error => console.log(error) // Handle the error response object
);
}*/
function upload(){
    const input = document.getElementById('file');
    const nameSong = document.getElementById('name');
    const category = document.getElementById('category');
    var formData = new FormData();
    formData.append("song", input.files[0]);
    formData.append("name", nameSong.value);
    formData.append("category", category.value);
    fetch('https://api-audio.herokuapp.com/songs/', {
        method: 'POST',
        body: formData
    }).then(
        response => response.json() // if the response is a JSON object
    ).then(
        success => console.log(success) // Handle the success response object
    ).catch(
        error => console.log(error) // Handle the error response object
    );
}