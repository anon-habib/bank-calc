// step-1: add event listener to the button
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2: get the deposit amount from the deposit input field.
    const depositField = document.getElementById('deposit-field');

    // step-3: get the value inside the input field by .value
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // setp-7: clear the deposit field
    depositField.value = '';
    // validation
    if (isNaN(newDepositAmount)) {
        alert('Please enter a valid amount');
        return;
    };

    // setp-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // validation
    if (newDepositAmount <= 0) {
        alert('Please enter a valid amount');
        return;
    };

    // step-4: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    // for non-input .innerText is used to get the text
    const priviousDepositTotalString = depositTotalElement.innerText;
    const priviousDepositTotal = parseFloat(priviousDepositTotalString);
    // add previous and current deposit in total
    const currentDepositTotal = priviousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
});