let countEl = document.getElementById("count-el");
let upgrade = document.getElementById("upgrade-btn")
console.log(countEl);

let count = 0;
let multiplier = 1;
let clickcount = 1 
let clickmultiplier = 1

function increment() {
    count = count + clickcount * clickmultiplier ;
    countEl.innerText = count;
}

function increment2() {
 clickcount = 2
 count = count - 10
}

function increment3() {
 clickmultiplier = 2
 count = count - 50
}