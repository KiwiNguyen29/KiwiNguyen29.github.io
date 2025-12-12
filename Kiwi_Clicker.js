let countEl = document.getElementById("count-el");
let upgrade = document.getElementById("upgrade-btn");
let kiwibtn = document.getElementById("kiwi-btn");
let upgrade2 = document.getElementById("upgrade-btn2");
let upgrade3 = document.getElementById("upgrade-btn3");
let upgrade4 = document.getElementById("upgrade-btn4");
let upgrade5 = document.getElementById("upgrade-btn5");
let upgrade6 = document.getElementById("upgrade-btn6");
let upgrade7 = document.getElementById("upgrade-btn7");
let upgrade8 = document.getElementById("upgrade-btn8");
let upgrade9 = document.getElementById("upgrade-btn9");
let upgrade10 = document.getElementById("upgrade-btn10");
console.log(countEl);

let count = 0;
let clickcount = 1;
let clickmultiplier = 1;


function increment() {
  count = count + clickcount * clickmultiplier;
  countEl.textContent = count;
}
kiwibtn.addEventListener("click", increment)

function increment2() {
  if (count > 9) {
    clickcount += 1;
    count = count - 10;
    countEl.textContent = count;
  }

}
upgrade.addEventListener("click", increment2)

function increment3() {

  if (count > 49) {
    count = count - 50;
    countEl.textContent = count;
    clickmultiplier *= 2;
  }

}
upgrade2.addEventListener("click", increment3)

function increment4() {
  if (count > 999) {
    clickmultiplier *= 5;
    count = count - 1000;
    countEl.textContent = count;
  }

}
upgrade3.addEventListener("click", increment4)

function increment5() {
  if (count > 9999) {
    clickcount += 100;
    count = count - 10000;
    countEl.textContent = count;
  }


}
upgrade4.addEventListener("click", increment5)
function increment6() {
  if (count > 99999) {
    clickmultiplier *= 10;
    count = count - 100000;
    countEl.textContent = count;
  }

}
upgrade5.addEventListener("click", increment6)
function increment7() {
  if (count > 999999) {
    clickmultiplier *= 100;
    count = count - 1000000;
    countEl.textContent = count;
  }

}
upgrade6.addEventListener("click", increment7)
function increment8() {
  if (count > 99999999) {
    clickmultiplier *= 1000;
    count = count - 100000000;
    countEl.textContent = count;
  }

}
upgrade7.addEventListener("click", increment8)
function increment9() {
  if (count > 999999999) {
    clickcount += 10000;
    count = count - 1000000000;
    countEl.textContent = count;
  }

}
upgrade8.addEventListener("click", increment9)
function increment10() {
  if (count > 9999999999) {
    clickcount *= 10000;
    count = count - 10000000000;
    countEl.textContent = count;
  }

}
upgrade9.addEventListener("click", increment10)
function increment11() {
  if (count > 99999999999) {
    clickcount += 100000;
    count = count - 100000000000;
    countEl.textContent = count;
  }

}

// attach missing listener for the last upgrade button
upgrade10.addEventListener("click", increment11)

