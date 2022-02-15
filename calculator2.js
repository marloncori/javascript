const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const mathSign = document.querySelector('.mathSign');
const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearsButton = document.querySelector('.clears');
const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history btn');

let result = '';

function displayNumbers () {
  if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
  if(this.textContent === '.' && currentNumber.innerHTML === '') return;
 currentNumber.innerHTML = '.0';
    currentNumber.innerHTML += this.textContent;
}

/*
the same as:
const displayNumbers = () => {
   if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return
   if(this.textContent === '.' && currentNumber.innerHTML === '') return
   currentNumber.innerHTML = '.0'
     currentNumber.innerHTML += this.textContent
}
*/

function operate () {
   if(currentNumber.innerHTML === '' && this.textContent === ''){
        currentNumber.innerHTML = '-';
        return;
   } else if(currentNumber.innerHTML === ''){
        return; 
   }
  
  if(mathSign !== ''){
     showResult();
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = '';
}

function showResult () {
  if(previousNumber.innerHTML === '' || currentNumber.innerHTML === ''){
    return;
  }
   let curr = Number(currentNumber.innerHTML);
   let prev = Number(previousNumber.innerHTML);
   let oper = mathSign.innerHTML;
  
   switch(oper){
     case '+':
         result = prev + curr;
         break;
     case '-':
         result = prev - curr;
         break;
     case '÷':
         result = prev / curr;
         break;
     case '×':
         result = prev * curr;
         break;
     case '2^':
         result = prev ** curr;
         break;
     default:
        return;
   }
  addToHistory();
  historyBtn.classList.add('active');
  currentNumber.innerHTML = result;
  previousNumber.innerHTML = '';
  mathSign.innerHTML = '';
}

function clearScreen () {
  result = '';
  currentNumber.innerHTML = '';
  previousNumber.innerHTML = '';
  mathSign.innerHTML = '';
  
}

function addToHisotry () {
   const newHistoryItem = document.createElement('li');
   newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.interHTML} ${curretNumber.innerHTML} = ${result}`;
   newHistoryItem.classList.add('history-item');
   calculatorHistory.appendChild(newHistoryItem);
}

function clearHistory () {
   calculatorHistory.textContent = '';
   if(calculatorHistory.textContent === ''){
       historyBtn.classList.remove('active');
   }
}

//nasłuchiwanie przecisków
operatorsButtons.forEach((button) => button.addEventListener('click', operate));
numbersButtons.forEach((button) => button.addEventListener('click', displayNumbers));
historyBtn.addEventListener('click', clearHistory);
equalsButton.addEventListener('click', showResult);
clearsButton.addEventListener('click', clearScreen);


