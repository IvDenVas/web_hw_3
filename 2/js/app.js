
function send() {

    let nameFromUser = document.getElementById('message1').value
    let messageFromUser = document.getElementById('message2').value

    if (nameFromUser == '') {
        alert("Введите имя!")
        // document.getElementById('error').innerText = 'Введите имя!'
    } else if (messageFromUser == '') {
        alert("Пустое сообщение!")
    }else {
        document.getElementById('result').innerText = `${nameFromUser}: ${messageFromUser}`
        document.getElementById('message2').value = ''
        
    }

}


