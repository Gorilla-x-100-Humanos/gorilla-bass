# 🦍 Gorillaz x 100 Humanos

## 👥 Integrantes
Turma 1TDSPJ
- Gutemberg Rocha Silva - RM562267
- Hector Salgado Soria - RM565498
- Julia Sayuri Kina - RM564555
- Mateus Henrique Carvalho Sartori - RM561892

## 📋 Descrição
Criação de uma página interativa utilizando HTML, CSS e JavaScript que simula uma batalha épica entre um gorila e 100 humanos.

## 🎯 Objetivos
- Manipular elementos com DOM.
- Aplicar lógica e estrutura com JavaScript.
- Criar uma interface com HTML5 e CSS3, focando na experiência do usuário.
- Utilizar funções para organizar a lógica do jogo.
- Implementar eventos de clique nos botões.
- Utilizar loops para controle da mecânica de jogo.
- Criar e exibir logs de batalha para mostrar as ações de cada rodada.

## 🎮 Regras do jogo
- Cada "player" (o gorila e o grupo de 100 humanos) inicia com 20 pontos de vida.
- O usuário controla o gorila.
- Ao clicar no botão "Atacar", o sistema gera um valor de força aleatório para cada player.
- O player com maior força no turno ataca e aplica 5 pontos de dano ao adversário.
- O jogo segue repetindo esse ciclo a cada clique no botão de ataque.

### 🛡️ Defesa do Gorila
Quando o gorila chega em 5 pontos de vida, ele ativa um modo de defesa:
- O usuário deve tentar adivinhar um número entre 0 e 3.
- Se acertar, o gorila se defendo recuperando 10 pontos de vida.
- Se errar, o jogo continua normalmente.
> Obs.: Os humanos agem automaticamente e não possuem opção de defesa e cura.