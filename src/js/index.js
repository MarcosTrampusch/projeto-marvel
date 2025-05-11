const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if (idSelecionado === 'ultron') return;


        /*
    Objetivo 1 - quando passar o mouse em cima do personagem temos que:

- colocar a classe selecionado no personagem que passamos o mouse para adicionar a animação 

- remvover classe selecionado do personagem que está selecionado
*/
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagem.classList.add("selecionado");

        /*  Objetivo 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande
  
        - alterar a imagem do jogador 1
        - alterar o nome do jogador 1
        */

        // const idSelecionado = personagem.attributes.id.value;

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador-1');

        const nomeSelecionado = personagem.getAttribute('data-name');
        console.log('nomeSelecionado', nomeSelecionado);

        nomeJogador1.innerHTML = nomeSelecionado;
    })
})
