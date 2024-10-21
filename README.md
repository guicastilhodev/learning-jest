# Desafios de Testes com Jest

## Exercício 1: Testando uma Função de Fatorial

**Crie uma função `fatorial` que calcula o fatorial de um número inteiro não negativo.**

1. A função deve retornar `1` se o número for `0`.
2. Para números maiores que `0`, deve retornar o fatorial do número (n! = n * (n-1) * ... * 1).

**Escreva os testes para a função:**

- Teste se `fatorial(0)` retorna `1`.
- Teste se `fatorial(5)` retorna `120`.
- Teste se `fatorial(3)` retorna `6`.
- Teste se `fatorial(-1)` lança um erro.

---

## Exercício 2: Testando uma Função de Verificação de Palíndromo

**Crie uma função `isPalindromo` que verifica se uma string é um palíndromo.**

- Um palíndromo é uma palavra ou frase que é lida da mesma forma de frente para trás, ignorando espaços e pontuação.

**Escreva os testes para a função:**

- Teste se `isPalindromo("arara")` retorna `true`.
- Teste se `isPalindromo("a man a plan a canal panama")` retorna `true`.
- Teste se `isPalindromo("teste")` retorna `false`.
- Teste se `isPalindromo("")` retorna `true`.

---

## Exercício 3: Testando uma Função de Filtragem de Números

**Crie uma função `filtrarPares` que recebe um array de números e retorna um novo array contendo apenas os números pares.**

**Escreva os testes para a função:**

- Teste se `filtrarPares([1, 2, 3, 4, 5, 6])` retorna `[2, 4, 6]`.
- Teste se `filtrarPares([1, 3, 5])` retorna `[]`.
- Teste se `filtrarPares([-2, -1, 0, 1])` retorna `[-2, 0]`.
- Teste se `filtrarPares([])` retorna `[]`.

---

## Dicas

- Lembre-se de usar diferentes matchers do Jest, como `toBe`, `toEqual`, `toThrow`, e outros.
- Você pode usar `describe` para agrupar seus testes.
- Para cada função, pense em como estruturar seus testes para cobrir diferentes casos.

Divirta-se testando! Se precisar de ajuda, estou por aqui!

