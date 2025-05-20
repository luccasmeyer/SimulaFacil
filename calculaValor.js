const taxaAdm = 15;

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


function mostraSimulado(evento){
    evento.preventDefault();

    const parcela = calculaConsorcio();
    resulSimulado.textContent = parcela;

    valorCredito.value = '';


}
