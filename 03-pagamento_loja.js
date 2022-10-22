/**
 * EXERCÍCIO 3
=========================
Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
EXEMPLO:
Preço: R$60,00
À vista: R$54,00
Ou 3x de: R$20,00
=========================
 */

let preco = 60;
let desconto = 0.1;
let precoSemDesconto = 0;
precoSemDesconto = preco * desconto;

let precoComDesconto = 0;
precoComDesconto = preco - precoSemDesconto;

let precoDivididoCartao = (preco / 3);

console.log(`O valor para o pagamento à vista com 10% de desconto é R$ ${precoComDesconto},00`);
console.log(`O valor dividido no cartão de crédito de 3x é R$ ${precoDivididoCartao},00`);