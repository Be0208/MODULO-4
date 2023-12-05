/* Desenvolva aqui a rotina */


function numero1(){

const valorBase = document.querySelector('#valor_base')
const valorTransporte = document.querySelector('#valor_transporte')
const valorAlimentacao = document.querySelector('#valor_alimentacao')
const valorReceita = document.querySelector('#valor_receita')


// Totalizar os campos 1+2+3 no campo 4

function calcularReceita () {

    document.querySelector('#btn_calcular').addEventListener('click', () => {
        //logica
        const totalReceita = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);
        
        valorReceita.value = totalReceita.toFixed(2); 
    });
    
}
calcularReceita()

// Totalizar os descontos 5+6 no campo 7

const valorAutomovel = document.querySelector('#valor_automovel')
const faltas = document.querySelector('#faltas')
const valorDescontos = document.querySelector('#valor_descontos')

function calcularDescontos () {

    document.querySelector('#btn_calcular').addEventListener('click', () => {

        const totalDescontos = Number(valorAutomovel.value) + Number(faltas.value)

        valorDescontos.value = totalDescontos.toFixed(2)
    })
}
calcularDescontos()


// Totalizar as receitas - despesas (campo 4 - campo 7) no campo 10

const valorTotal = document.querySelector('#valor_total')

function calcularTotal(){
    document.querySelector('#btn_calcular').addEventListener('click', () => {

        const totalValor = Number(valorReceita.value) - Number(valorDescontos.value)

        valorTotal.value = totalValor.toFixed(2)
    })
}
calcularTotal()

}
// DESCOMENTAR PARA ATIVAR

// numero1()




//--------------------------------------------------imput---------------------------------------------------------

function numero2(){

const valorBase = document.querySelector('#valor_base');
const valorTransporte = document.querySelector('#valor_transporte');
const valorAlimentacao = document.querySelector('#valor_alimentacao');
const valorReceita = document.querySelector('#valor_receita');
const valorAutomovel = document.querySelector('#valor_automovel');
const valorFaltas = document.querySelector('#faltas');
const valorDesconto = document.querySelector('#valor_descontos');
const totalcalculo = document.querySelector('#valor_total');

valorBase.addEventListener('input', calcularReceita);
valorTransporte.addEventListener('input', calcularReceita);
valorAlimentacao.addEventListener('input', calcularReceita);
valorAutomovel.addEventListener('input', calcularDescontos);
valorFaltas.addEventListener('input', calcularDescontos);

function calcularReceita() {
    // lógica
    const totalReceita = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);
    valorReceita.value = totalReceita.toFixed(2);
    calcularTotal();
}

function calcularDescontos() {
    const totalDesconto = parseFloat(valorAutomovel.value) + parseFloat(valorFaltas.value);
    valorDesconto.value = totalDesconto.toFixed(2);
    calcularTotal();
}

function calcularTotal() {
    const total = parseFloat(valorReceita.value) - parseFloat(valorDesconto.value);
    totalcalculo.value = total.toFixed(2);
}

}


// ----------- DESCOMENTAR PARA ATIVAR
// numero1()