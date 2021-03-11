// tady je místo pro náš program

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
let text = 'Gratulace, právě jsi spustila tuto funkci!';

function upozorni() {
  alert(text);
  console.log(text);
  document.querySelector('.ctverecek').innerHTML =   text;
  document.querySelector('.ctverecek').style.width = '500px';
  
}

function barva() {
  document.querySelector('.ctverecek').style.backgroundColor = 'green';
}

function zobrazVysledek() {
  document.querySelector('#vysledek').innerHTML = secti(4, 5);
}
