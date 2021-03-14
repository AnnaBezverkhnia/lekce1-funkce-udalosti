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

let square = document.querySelector('.ctverecek');

function upozorni() {
  let text = 'Gratulace, právě jsi spustila tuto funkci!';
  alert(text);
  console.log(text);
  square.innerHTML =   text;
  square.style.width = '500px';
  
}

function barva() {
  square.style.backgroundColor = 'green';
}

function zobrazVysledek() {
  document.querySelector('#vysledek').innerHTML = secti(4, 5);
}
