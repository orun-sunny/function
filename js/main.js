function getInputValue(fieldId) {
    const input = document.getElementById(fieldId);
    const valueIntText = inputField.value;
    const value = parseFloat(valueIntText);

}


document.getElementById('deposit-button').addEventListener('click', function () {
    getInputValue('deposit-input')
})