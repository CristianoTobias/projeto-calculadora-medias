const form = document.querySelector("#form-atividades");
let linhas = "";
const imgAprovado = `<img src="./images/aprovado.png" alt="emoji celebrando" />`;
const imgReprovado = `<img src="./images/reprovado.png" alt="emoji decepcionado" />`;
const arrAtividades = [];
const arrNotas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
//const notaMinima= parseFloat(prompt("Digite a nota minima!"));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTable();
  atualizaMediaFinal();
});

function adicionaLinha() {
  const inputNomeAtividade = document.querySelector("#nome-atividade");
  const inputNotaAtividade = document.querySelector("#nota-atividade");
  if (arrAtividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade "${inputNomeAtividade.value}" ja foi inserida`);
  } else {
    arrAtividades.push(inputNomeAtividade.value);
    arrNotas.push(parseFloat(inputNotaAtividade.value));
    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${
      inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    linha += "</tr>";
    linhas += linha;
  }
  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function atualizaTable() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();
  document.querySelector("#media-final").innerHTML = mediaFinal.toFixed(2);
  document.querySelector("#media-final-resultado").innerHTML =
    mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let soma = 0;
  for (n of arrNotas) {
    soma += n;
  }
  console.log(soma);
  return (media = soma / arrAtividades.length);
}
