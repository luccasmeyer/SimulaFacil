const taxaAdm = 15;

const opcao = document.querySelectorAll(".opcao");
const valorCredito = document.getElementById('valor-credito');
const botaoSimular = document.getElementById('botao-salvar');
const resulSimulado = document.getElementById('resultado-simulado');

botaoSimular.addEventListener('click', mostraSimulado);

//o parametro eveto so se passa na função que exibi os dados
function calculaConsorcio(){
    
    const creditoValue = parseFloat(valorCredito.value);

    convertePorCem = taxaAdm/100;
    custoTotal = (creditoValue * convertePorCem) + creditoValue;
    resultado = custoTotal / 60;

    return resultado;

}


opcoes.forEach((opcao, index) => {
  opcao.addEventListener("click", function () {
    console.log("Índice clicado:", index);

    // Você pode usar o índice para chamar funções específicas:
    switch (index) {
      case 0:
        funcaoMacas();
        break;
      case 1:
        funcaoBanana();
        break;
      case 2:
        funcaoAbacate();
        break;
    }
  });
});

function funcaoMacas() {
  console.log("Função de maçãs");
}

function funcaoBanana() {
  console.log("Função de bananas");
}

function funcaoAbacate() {
  console.log("Função de abacates");
}



function mostraSimulado(evento){
    evento.preventDefault();

    const parcela = calculaConsorcio();
    
    resulSimulado.textContent = parcela;

    valorCredito.value = '';
}
