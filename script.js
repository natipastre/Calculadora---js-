const resultado = document.getElementById('resultado');

function addValor(valor) {
  resultado.value += valor;
}

function limpar() {
  resultado.value = '';
}

function voltar() {
  resultado.value = resultado.value.slice(0, -1);
}

function calcular() {
  try {
    resultado.value = eval(resultado.value);
  } catch {
    alert('Erro na expressão!');
    limpar();
  }
}
