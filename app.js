/*
(function (window, document, undefined) {
 //   'use strict';


})(window, document);
*/

(() => {

    const calcGrowth = (pastVal, currentVal) => {
    return (currentVal - pastVal) / pastVal * 100;
    }

        function calculateAll() {
                 // 1. Select and read data from the UI
    const priceBought = document.querySelector('.price__input--bought').value;
    const priceNow = document.querySelector('.price__input--now').value;
    const btcInvest = document.querySelector('.investment__btc').value;
    const resultField = document.querySelector('.result');     
    
        //2. calculate the profits
    const invested = btcInvest * priceBought;
    const current = btcInvest * priceNow;
    const profit = current - invested;
    const growth = calcGrowth(invested, current);
    //output..
    //3. Write the result to the UI
    let message = ' ';
    if(profit > 0){
        message = `Well done! You Made a Profit of ${profit.toFixed(2)} (${growth.toFixed(2)}%).`;
        resultField.style.color = 'green';
    }else if(profit < 0){
        message = `Not Good.. You're at a loss of ${profit.toFixed(2)} (${growth.toFixed(2)}%).`;
        resultField.style.color = 'red';
    }else {
         message = `You're Breaking Even!`;
       resultField.style.color = 'gray';    
    }
            resultField.textContent = message;
        }

    //button for click even
    const btn = document.querySelector('.investment__btn').addEventListener('click', calculateAll);
})();