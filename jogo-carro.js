// Criar o canvas dinamicamente
const canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Carro
const carro = {
  x: 180,
  y: 500,
  width: 40,
  height: 80,
  cor: "red",
  velocidade: 5
};

// Obstáculos
let obstaculos = [];
let pontuacao = 0;
let gameOver = false;

// Criar obstáculos aleatórios
function criarObstaculo() {
  const largura = 40;
  const x = Math.random() * (canvas.width - largura);
  obstaculos.push({
    x: x,
    y: -80,
    width: largura,
    height: 80,
    cor: "black",
    velocidade: 4
  });
}

// Atualizar posições
function atualizar() {
  if (gameOver) return;

  obstaculos.forEach(obs => {
    obs.y += obs.velocidade;

    // Verificar colisão
    if (
      carro.x < obs.x + obs.width &&
      carro.x + carro.width > obs.x &&
      carro.y < obs.y + obs.height &&
      carro.y + carro.height > obs.y
    ) {
      gameOver = true;
    }
  });

  // Remover obstáculos fora da tela
  obstaculos = obstaculos.filter(obs => obs.y < canvas.height);
  pontuacao++;
}

// Desenhar elementos
function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Carro
  ctx.fillStyle = carro.cor;
  ctx.fillRect(carro.x, carro.y, carro.width, carro.height);

  // Obstáculos
  obstaculos.forEach(obs => {
    ctx.fillStyle = obs.cor;
    ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
  });

  // Pontuação
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Pontuação: " + pontuacao, 10, 30);

  // Game Over
  if (gameOver) {
    ctx.fillStyle = "yellow";
    ctx.font = "40px Arial";
    ctx.fillText("Game Over", 100, 300);
  }
}

// Controles
document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft" && carro.x > 0) {
    carro.x -= carro.velocidade;
  } else if (e.key === "ArrowRight" && carro.x + carro.width < canvas.width) {
    carro.x += carro.velocidade;
  }
});

// Loop do jogo
setInterval(() => {
  if (Math.random() < 0.05) criarObstaculo();
  atualizar();
  desenhar();
}, 30);
