/* Objetivo 1: clicar no botao respostas e marcar de verde a resposta correta e de vermelho a errada
    passo1: pegar os botoes no js pra poder verificar quando o usuario clicar em cima de um deles
    passo2: adicionar a classe "correta" na resposta correta e "errada" na resposta errada
    passo3: verificar se ja existe uma resposta correta, se sim devemos remover a selecao dela
    passo4: verificar se ja existe uma resposta errada, se sim devemos remover a selecao dela
    passo5: verificar se ja existe uma resposta selecionada, se sim devemos remover a selecao dela
    passo6: adicionar a classe "selecionada" no botao que o o usuario clicou
    passo7: adicionar a classe "selecionada" na resposta que o usuario clicou
    passo8: verificar se ja existe uma resposta selecionada, se sim devemos remover a selecao dela 
    
   const botoes = document.querySelectorAll('.botao');
   const respostas = document.querySelectorAll(".resposta");
   const respostaCorreta = document.querySelector(".resposta.certa");
   const respostaErrada = document.querySelector(".resposta.errada");
   const respostaSelecionado = document.querySelector(".resposta.selecionado");
   const botaoSelecionado = document.querySelector(".botao.selecionado");
   const botaoResposta = document.querySelectorAll(".botao-resposta");
   const botaoRespostaSelecionado = document.querySelector(".botao-resposta.selecionado");
   */
  /*function Quiz() {
    var certo = document.querySelector(".botao-certo");
    
    var errado = document.querySelectorAll(".botao");
    
    certo.addEventListener("click", function(){
        console.log("Certa Resposta!");
        certo.classList.add("botaocerto");
        
    });

    errado.forEach((botao) => {
        botao.addEventListener("click", function(){
          if (!botao.classList.contains("botao-certo"))  {
            console.log("Erou!!!");
            botao.classList.add("botao-errado");
            
          }
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        Quiz();
    });
}
    */
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add("botao-certo"); // Adiciona a classe para destacar o botão correto
        alert("Certa Resposta!"); // Exibe um alerta para a resposta correta
        console.log("Resposta correta!");
    } else {
        button.classList.add("botao-errado"); // Adiciona a classe para destacar o botão errado
        alert("Erouu!!!"); // Exibe um alerta para a resposta errada
        console.log("Resposta errada!");
    }
}
