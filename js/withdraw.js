// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2: get the withdraw amount in the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7: clear the withdraw field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a valid amount');
        return;
    };
    // step-3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // validation
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Withdraw amount is grater then balance');
        return;
    };
    if (newWithdrawAmount <= 0) {
        alert('Please enter a valid amount');
        return;
    };

    // step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step-6: calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set updated withdraw amount
    balanceTotalElement.innerText = newBalanceTotal;
});