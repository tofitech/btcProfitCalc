/*
//Variables declarations..
const btc = 3.5;
const btcUsdBought = 10000;
const btcUsdNow = 12000;
const invested = btc * btcUsdBought;
const current = btc * btcUsdNow;

const profit = current - invested;
//const growth = profit / invested * 100;
const growth = calcGrowth(invested, current);
const growth2 = calcGrowth(5000)

function calcGrowth(pastVal, currentVal) {
return (currentVal - pastVal) / pastVal * 100;;
}

let message = '';

if(profit > 0){
    message = `Great! You Made a Profit of ${profit } (${growth}%).`;
}else if(profit < 0){
    message = `Oh no! You're at a loss of ${profit} (${growth}%).`;
}else {
   message = `You're Breaking Even!`;
}
console.log(message);
*/
//DOM manipulation: selecting elements / handing events..

const calcGrowth = (pastVal, currentVal) => {
    return (currentVal - pastVal) / pastVal * 100;
    }
    //button for click even
    const btn = document.querySelector('.investment__btn');
   
    btn.addEventListener('click', function() {
         // 1. Select and read data from the UI
    const priceBought = document.querySelector('.price__input--bought').value;
    const priceNow = document.querySelector('.price__input--now').value;
    const btcInvest = document.querySelector('.investment__btc').value;
    const result = document.querySelector('.result');     
    
        //2. calculate the profits
    const invested = btcInvest * priceBought;
    const current = btcInvest * priceNow;
    const profit = current - invested;
    const growth = calcGrowth(invested, current);
    
    
    //output..
    //3. Write the result to the UI
    const resultField = document.querySelector('.result');
    let message = ' ';
    if(profit > 0){
        message = `Great! You Made a Profit of ${profit} (${growth}%).`;
        resultField.style.color = 'green';
    }else if(profit < 0){
        message = `Oh no! You're at a loss of ${profit} (${growth}%).`;
        resultField.style.color = 'red';
    }else {
       message = `You're Breaking Even!`;
    } 
    
    resultField.textContent = message;
});






/*
const calcGrowth = (pastVal, currentVal) => (currentVal - pastVal) / pastVal * 100;

// DOM manipulation: seleting elements / handling events
document.querySelector('.investment__btn').addEventListener('click', () => {
  // 1. Select and read data from the UI
  const btcUsdBought = document.querySelector('.price__input--bought').value;
  const btcUsdNow = document.querySelector('.price__input--now').value;
  const btc = document.querySelector('.investment__btc').value;
    
  // 2. Calculate the profits
  const invested = btc * btcUsdBought;
  const current = btc * btcUsdNow;
  const profit = current - invested;
  const growth = calcGrowth(invested, current);
  
  // 3. Write the result to the UI
  let message = "";
  const resultField = document.querySelector('.result');
  if (profit > 0) {
    message = `Great! You made a profit of $${profit} (${growth}%).`;
    resultField.style.color = 'green';
  } else if (profit < 0) {
    message = `Oh no! You're at a loss of $${profit} (${growth}%).`;
    resultField.style.color = 'red';
  } else {
    message = "You're breaking even!";
  }
  
  resultField.textContent = message;
  
});
*/