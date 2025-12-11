let countEl = document.getElementById("count-el");
let upgrade = document.getElementById("upgrade-btn");
console.log(countEl);

let count = 0;
let clickcount = 1;
let clickmultiplier = 1;


function increment() {
  count = count + (clickcount) * clickmultiplier;
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
    clickmultiplier *= 2;
  }

}
kiwibtn.addEventListener("click", increment3)

function increment4() {
  if (count > 999) {
    clickmultiplier *= 5;
    count = count - 1000;
    countEl.innerText = count;
  }
 
}
kiwibtn.addEventListener("click", increment4)

function increment5() {
  if (count > 9999) {
    clickcount += 100;
    count = count - 10000;
    countEl.innerText = count;
  }


}
kiwibtn.addEventListener("click", increment5)
function increment6() {
  if (count > 99999) {
    clickmultiplier *= 10;
    count = count - 100000;
    countEl.innerText = count;
  }
 
}
kiwibtn.addEventListener("click", increment6)
function increment7() {
  if (count > 999999) {
    clickmultiplier *= 100;
    count = count - 1000000;
    countEl.innerText = count;
  }
 
}
kiwibtn.addEventListener("click", increment7)
function increment8() {
  if (count > 99999999) {
    clickmultiplier *= 1000;
    count = count - 100000000;
    countEl.innerText = count;
  }
 
}
kiwibtn.addEventListener("click", increment8)
function increment9() {
  if (count > 999999999) {
    clickcount += 10000;
    count = count - 1000000000;
    countEl.innerText = count;
  }
 
}
kiwibtn.addEventListener("click", increment9)
function increment10() {
  if (count > 9999999999) {
    clickcount *= 10000;
    count = count - 10000000000;
    countEl.innerText = count;
  }
 
}
kiwibtn.addEventListener("click", increment10)
function increment11() {
  if (count > 99999999999) {
    clickcount += 100000;
    count = count - 100000000000;
    countEl.innerText = count;
  }
 
}
kiwibtn.addEventListener("click", increment11)
