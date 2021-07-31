var salario = document.querySelector('#ganho-mes');
var horasTrabalhadasPorDia = document.querySelector('#horas-dia');
var mostrarResultado = document.querySelector('#resposta');


function calcularValorHora(){
    var totalDeHorasTrabalhadas = horasTrabalhadasPorDia.value * 21;
    var valorPorHora = (salario.value / totalDeHorasTrabalhadas).toFixed(2)//casas decimais
    
    
        
    mostrarResultado.textContent = 'R$' + ' ' + valorPorHora   
  } 
