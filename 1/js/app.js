
function getNameFromUser() {

    let message = document.getElementById('message').value;  

    if (message == '') {
        alert("Введите имя!")
        // document.getElementById('error').innerText = 'Введите имя!'
    } else {
        document.getElementById('result').innerText =`Привет ${message}`
        // alert(`Привет ${message}`)
    }
}


