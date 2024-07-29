function calculateTip() {
    let billAmount = document.getElementById('billAmount').value;
    let tipPercentage = document.getElementById('tipPercentage').value;
    
    if (billAmount === '' || tipPercentage === '') {
        alert('Please enter values for both fields');
        return;
    }

    billAmount = parseFloat(billAmount);
    tipPercentage = parseFloat(tipPercentage);

    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalAmount = billAmount + tipAmount;

    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}
