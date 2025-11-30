idLinha = 1;
let linha = document.getElementById("linha" + idLinha);
let certa = "BIANCA";
let botao = document.getElementById("btnTestar");
let input = document.getElementById("entrada");
botao.addEventListener("click", testarPalavra);
input.addEventListener("keydown", detectaEnter);

function detectaEnter(tecla) {
  if (tecla.key === "Enter") {
    testarPalavra();
  }
}

function testarPalavra() {
  let palavra = document.getElementById("entrada").value.toUpperCase();
  if (palavra.length !== 6) return;
  for (let i = 0; i < 6; i++) {
    if (palavra[i] === certa[i]) {
      addCerta(palavra[i]);
    } else if (certa.includes(palavra[i])) {
      addNaolugar(palavra[i]);
    } else {
      addErrada(palavra[i]);
    }
  }
  if (palavra === certa) {
    alert("Parabéns, você ganhou!");
    return;
  }
  idLinha++;
  if (idLinha === 7) {
    alert("Você perdeu, tente novamente. A palvra correta era: " + certa);
    return;
  }
  linha = document.getElementById("linha" + idLinha);
  document.getElementById("entrada").value = "";
}

function addCerta(letra) {
  let item = document.createElement("div");
  item.classList.add("letra");
  item.classList.add("certa");
  item.textContent = letra;
  linha.appendChild(item);
}

function addNaolugar(letra) {
  let item = document.createElement("div");
  item.classList.add("letra");
  item.classList.add("naolugar");
  item.textContent = letra;
  linha.appendChild(item);
}

function addErrada(letra) {
  let item = document.createElement("div");
  item.classList.add("letra");
  item.classList.add("errada");
  item.textContent = letra;
  linha.appendChild(item);
}
