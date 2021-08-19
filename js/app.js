

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {

    const pin = getPin();

    document.getElementById('display-pin').value = pin;

    clearDisplay();
    
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if(number == 'C')
            displayInput.value = '';
    }
    else {
        const previousNumber = displayInput.value;
        const newNumber = previousNumber + number
        displayInput.value = newNumber;
    }
    
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    if (pin == typedNumbers) {
        const successMsg = document.getElementById('notify-success');
        successMsg.style.display = 'block';
    }
    else {
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
    }
}

function clearDisplay() {

    document.getElementById('notify-success').style.display = 'none';
    document.getElementById('notify-fail').style.display = 'none';
    document.getElementById('typed-numbers').value = '';

}