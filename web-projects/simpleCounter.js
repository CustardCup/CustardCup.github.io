const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnReset = document.getElementById('btnReset');
const counter = document.getElementById('count');

let count = Number(counter.textContent) || 0;

function addCount() {
    count+=1;
    counter.textContent = count;
}
btnPlus.addEventListener('click', addCount);


function minusCount() {
    if (count==0) {
        count.textContent = 0;
    } else { 
    count-=1;
    counter.textContent = count;
    }
}
btnMinus.addEventListener('click', minusCount);

function resetCount() {
    count=0;
    counter.textContent = count;
}
btnReset.addEventListener('click', resetCount);

// function setCount() {
    
// }
