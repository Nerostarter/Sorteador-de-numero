function sortear(){
let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);
let numero = obterNumeroAleatorio(de , ate);

let intervalo = ate - de + 1;
    if (quantidade > intervalo) {
        alert('Não é possível sortear essa quantidade de números únicos no intervalo especificado. Reveja os dados.');
        return;
    }
    let sorteados = [];
    for (let i = 0; i < quantidade; i++){
       numero = obterNumeroAleatorio(de, ate)
       while(sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de , ate)
    }

       sorteados.push(numero);
    }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
  alterarStatusBotao();
  if (de > ate){
    alert ('reveja se inseriu os dados corretamente.')
  }
 
  
}
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
     
}
function  alterarStatusBotao(){
let botao = document.getElementById("btn-reiniciar")
if(botao.classList.contains("container__botao-desabilitado")){
botao.classList.remove("container__botao-desabilitado")
botao.classList.add("container__botao")
}else {
    botao.classList.remove("container__botao")
    botao.classList.add("container__botao-desabilitado")
}
}
function reiniciar(){
    alterarStatusBotao()
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>`
}