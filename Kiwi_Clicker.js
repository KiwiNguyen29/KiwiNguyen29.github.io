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
  clickcount = 2;
  count = count - 10;
  countEl.innerText = count;
}
kiwibtn.addEventListener("click", increment2)

function increment3() {
  clickmultiplier = 2;
  count = count - 50;
  countEl.innerText = count;
}
kiwibtn.addEventListener("click", increment3)