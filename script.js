//Selecionar os elementos do DOM que serão manipulados
const botao = document.getElementById("botaoInteragir");
const mensagem = document.getElementById("mensagem");

//Adiciona um evento de clique ao botão
botao.addEventListener("click", () => {
        //Solicita o nome do usuário
        let nome = prompt("Qual é o seu nome?");

        //Condição parab veriuficar se o nome foi fornecido
        if (nome) {
            //Solicitar a idade do usuário
            let idade = prompt("Qual é a sua idade?");

            //Condição para verificar se a idade é um numero válido
            if (isNaN(idade) || idade <= 0) {
            mensagem.innerText = `Olá, ${nome}! Você tem apenas ${idade} anos.`;
            mensagem.style.color = "green"; //Altera a cor do texto para verde
            } else {
                mensagem.innerText = `Olá, ${nome}! Você é maior de idade com ${idade} anos.`;
                mensagem.style.color = "green"; //Atera a cor do texto para verde
            }
            console.log(`Nome do usuário: ${nome}`);
            console.log(`Idade do usuário: ${Idade}`);
        }
     else {
        mensagem.innerText = "Nome não fornecido. Por favor, insira um nome.";
        mensagem.style.color = "orange"; //Altera a cor do texto para laranja
    }
});