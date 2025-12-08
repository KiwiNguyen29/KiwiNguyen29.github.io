let countEl = document.getElementById("count-el");
let upgrade = document.getElementById("upgrade-btn");
console.log(countEl);

let count = 0;
let clickcount = 1;
let clickmultiplier = 1;


function increment() {
  count = count + clickcount * clickmultiplier;
  countEl.innerText = count;
}
kiwibtn.addEventListener("click", increment1)

function increment2() {
  if (count > 9) {
    clickcount += 1;
    count = count - 10;
    countEl.innerText = count;
  }

}
kiwibtn.addEventListener("click", increment2)

function increment3() {

  if (count > 49) {
    count = count - 50;
    countEl.innerText = count;
    clickmultiplier += 2;
  }

}
kiwibtn.addEventListener("click", increment3)

function increment4() {
  if (count > 999) {
    clickmultiplier += 5;
    count = count - 1000;
    countEl.innerText = count;
  }
 
}
kiwibtn.addEventListener("click", increment4)