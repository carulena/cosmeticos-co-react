
export function separaUnicos (produtos: any[]){
    //retorna os valores unicos do carrinho e 
    //a quantidade de vezes que o item aparece no carrinho
   return produtos.reduce(function (valor, valor2) {
    return (
        valor[valor2] ? ++valor[valor2] :(valor[valor2] = 1),
        valor
    );
}, {});
}