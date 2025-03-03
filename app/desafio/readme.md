Para a criação do tabuleiro de damas, eu utilizei o styled components por conta de ser uma ferramenta que eu tenho mais prática no uso.

Para determinar a cor das casas, eu fiz o uso de condicionais utilizando props. Eu optei por criar uma linha A onde a primeira casa da linha possui a cor branca e a linha B onde a primeira casa possui a cor preta. Para criar o tabuleiro, eu adicionei 8 linhas, sendo elas 4 da linha A e 4 da linha B, adicionei cada linha de forma alternada.

Para adicionar as peças nas casas, eu adicionei uma condicional que verifica se o componente possui a prop blue ou green, caso o componente não tiver nenhuma das duas props, a peça será transparente, que é o caso das duas linhas do meio do tabuleiro.

Gostei bastante do desafio, acredito que tenha formas mais simples e eficaz de se fazer, mas pude treinar bastante minha lógica e conseguir arrumar uma solução funcional.