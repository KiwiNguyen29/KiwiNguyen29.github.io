const fs = require('fs');
const { JSDOM } = require('jsdom');
const html = fs.readFileSync('Kiwi_Clicker.html', 'utf8');
const js = fs.readFileSync('Kiwi_Clicker.js', 'utf8');
const dom = new JSDOM(html, { runScripts: 'outside-only' });
const { window } = dom;
const { document } = window;
// expose globals expected by script
global.window = window;
global.document = document;
// evaluate the script in the window's global scope
window.eval(js);
const kiwibtn = document.getElementById('kiwi-btn');
const countEl = document.getElementById('count-el');
console.log('initial count', countEl.textContent);
// simulate click
if (!kiwibtn) { console.error('kiwibtn is null'); process.exit(2); }
kiwibtn.click();
console.log('after click', countEl.textContent);
