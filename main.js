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
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  document.querySelector('.ctverecek').innerHTML =   "Gratulace, právě jsi spustila tuto funkci!";
  document.querySelector('.ctverecek').style.width = '500px';
  
}

function barva() {
  document.querySelector('.ctverecek').style.backgroundColor = 'green';
}

function zobrazVysledek() {
  document.querySelector('#vysledek').innerHTML = secti(4, 5);
}
