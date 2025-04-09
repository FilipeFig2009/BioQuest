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