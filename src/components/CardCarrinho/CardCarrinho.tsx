import { FunctionComponent } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import styled from "styled-components";
import ImagemProduto from "../ImagemProduto/ImagemProduto";
import { useProdutos } from "../../state/hooks/useProdutos";
import { useAdicionarAoCarrinho } from "../../state/hooks/useAdicionarAoCarrinho";
import { useRemoveUnidade } from "../../state/hooks/useRemoveUnidade";
import { useRemoveCarrinho } from "../../state/hooks/useRemoveCarrinho";
import PrecoProduto from "../PrecoProduto/PrecoProduto";


const Card = styled.div `
    font-family: "Domine", serif;
    font-weight: 900;
    font-style: normal;
    text-align: start;
    display: flex;
    margin: 20px;
    padding: 20px;
    border: 1px solid #E5E5E5;
    width: 750px;
    height: 300px;
    justify-content: space-between;
`
const Produto = styled.div `
    text-align: start;
    display: flex;
    margin: 30px;
`
const NomeProduto = styled.p `
    text-align: start;
    font-size: 15px;
`
const InformacoesProduto = styled.div `
    margin-left: 30px
`
const Botoes = styled.div `
    margin: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    `

const Quantidade = styled.div `
    margin: 30px;
    min-width: 100px
`
const BtnQtde = styled.button`
    border-radius: 12px;
    border: 1px solid #E5E5E5;
    width: 35px;
    margin: 5px; 
    cursor:pointer;
`
const CardCarrinho: FunctionComponent<{ produto_id: number, qtde: number }> = props => {
    
    const produtos = useProdutos()
    
    const adicionaCarrinho = useAdicionarAoCarrinho()
    const removeItemCarrinho = useRemoveUnidade()
    const removeProdutoCarrinho = useRemoveCarrinho()

    //busca pelas informações do produto
    const produto = produtos.filter((pl) => pl.produto_id === props.produto_id)[0]
    
    const adicionaAoCarrinho = (produto: React.FormEvent<HTMLFormElement>) => {
        adicionaCarrinho(produto);
      };
      const removeItemDoCarrinho = (produto: React.FormEvent<HTMLFormElement>) => {
        removeItemCarrinho(produto);
      };
      const removeProdutoDoCarrinho = (produto: React.FormEvent<HTMLFormElement>) => {
        removeProdutoCarrinho(produto);
      };
    return(
        <Card>
            <Produto>
            <ImagemProduto imagem={produto.imagem_produto}/>
            <InformacoesProduto>
            <NomeProduto>{produto.nome_produto}</NomeProduto>
            <PrecoProduto desconto={produto.desconto_produto} preco={produto.valor_produto}></PrecoProduto>
            </InformacoesProduto>
            </Produto>
            <Botoes>
                <FaRegTrashAlt style={{cursor: 'pointer'}} onClick={() => removeProdutoDoCarrinho(produto)} color="red"/>
                <Quantidade>
                    <BtnQtde onClick={() => removeItemDoCarrinho(produto)}>-</BtnQtde>
                    {props.qtde}
                    <BtnQtde onClick={() => adicionaAoCarrinho(produto)}>+</BtnQtde>
                </Quantidade>
            </Botoes>

        </Card>
    )}


export default CardCarrinho;