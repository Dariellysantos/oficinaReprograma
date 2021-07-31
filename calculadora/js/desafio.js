var valorHora = document.querySelector('#valor-hora');
var diasGastosComProjeto = document.querySelector('#horas-projeto');
var mostrarResultado = document.querySelector('#resposta');


function calcularValorHora(){
    var valorProjeto = (diasGastosComProjeto.value * valorHora.value).toFixed(2);
   console.log(valorProjeto) 
    
    
        
    mostrarResultado.textContent = 'R$' + ' ' + valorProjeto
}
