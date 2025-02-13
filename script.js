// Função para mover a imagem para cima ao clicar na carta
function moverCima() {
  const imagem = document.querySelector('.imagem');
  imagem.style.transform = 'translateY(-100px)';
}

// Função para gerar as palavras ao clicar no botão
function gerarPalavras() {
  const container = document.getElementById('palavras-container');
  container.innerHTML = ''; // Limpar o conteúdo anterior

  const palavras = [];
  // Adiciona 300 palavras "gayyyyyyy"
  for (let i = 0; i < 300; i++) {
    palavras.push("gayyyyyyy");
  }
  // Adiciona 20 palavras "eu te amo"
  for (let i = 0; i < 20; i++) {
    palavras.push("eu te amo");
  }

  // Gerar as palavras e colocá-las de maneira aleatória na tela
  palavras.forEach(palavra => {
    const palavraElement = document.createElement('div');
    palavraElement.classList.add('palavra');
    palavraElement.textContent = palavra;

    // Definir posições aleatórias para cada palavra
    const top = Math.random() * 100 + '%';
    const left = Math.random() * 100 + '%';

    palavraElement.style.top = top;
    palavraElement.style.left = left;

    // Adicionar palavra ao container
    container.appendChild(palavraElement);
  });
}
