# Fale e Adivinhe o Número

## Descrição

"Fale e Adivinhe o Número" é um jogo interativo onde você tenta adivinhar um número sorteado pelo sistema, utilizando sua voz. Com a ajuda do reconhecimento de voz, você pode falar o número e o sistema verifica se sua tentativa está correta. O número sorteado está dentro de um intervalo definido, que vai de 0 a 100 por padrão, e a cada tentativa, você pode tentar novamente até acertar!

Este projeto utiliza JavaScript para o reconhecimento de voz e lógica do jogo, além de uma interface simples e divertida para interação.

### Funcionalidades:

- **Reconhecimento de voz**: O jogador fala um número e a aplicação tenta identificar se o número falado corresponde ao número sorteado.
- **Intervalo de números**: O número sorteado está entre um intervalo configurável (0 a 100 por padrão).
- **Feedback visual**: A cada tentativa, o jogo exibe a informação sobre o sucesso ou erro, e qual é o número sorteado.
- **Design simples**: Interface limpa e moderna utilizando o FontAwesome para ícones e o Reset CSS para uma base consistente de estilos.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da aplicação.
- **CSS**: Estilização visual com o uso do Reset CSS e ícones do FontAwesome.
- **JavaScript**:
  - **Reconhecimento de voz**: A captura de voz é feita usando a API de reconhecimento de voz do navegador.
  - **Lógica do jogo**: Definição do número aleatório e verificação das tentativas.
  
## Como Usar

1. **Clone este repositório**:

```bash
git clone https://github.com/seu-usuario/fale-e-adivinhe-o-numero.git
