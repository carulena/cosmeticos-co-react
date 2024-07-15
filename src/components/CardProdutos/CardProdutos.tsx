import { FunctionComponent } from "react"
import ImagemProduto from "../ImagemProduto/ImagemProduto"
import styled from "styled-components"
import PrecoProduto from "../PrecoProduto/PrecoProduto"
import { useAdicionarAoCarrinho } from "../../state/hooks/useAdicionarAoCarrinho"
import { Link } from "react-router-dom"

const CardProdutos: FunctionComponent<{ produto: any }> = props => {
    const setCart = useAdicionarAoCarrinho()
    const addToCart = (produto: React.FormEvent<HTMLFormElement>) => {
        setCart(produto);
      };

      
    const Card = styled.div `
    font-family: "Domine", serif;
    font-weight: 900;
    font-style: normal;
    text-align: start;
    display:flex;
    width: 40vw;
    border: 1px solid #E5E5E5;
    `

    const NomeProduto = styled.p `
    text-align: start;
    font-size: 20px;
    color: black
    `
    const TamanhoProduto = styled.p `
    font-size: 15px;
    `
    const InformacoesProduto = styled.div `
    margin-left: 15px;
    `
    const AdicionarProduto = styled.button `
    margin-top: 50px;
    margin-left: 20px;
    width: 15vw;
    background-color:#F48646;
    height: 4vh;
    border:none; 
    border-radius: 25px;
    color:white;
    cursor:pointer;
    font-family: "Domine", serif;
    `
   return (
    <Card>
        <ImagemProduto imagem={props.produto.imagem_produto}/>
        <InformacoesProduto>
            
        <Link to={`/detalhes/${props.produto.produto_id}`}>
        <NomeProduto>{props.produto.nome_produto}</NomeProduto>
        </Link>
        <TamanhoProduto>{props.produto.tamanho_produto}</TamanhoProduto>
        <PrecoProduto 
            preco={props.produto.valor_produto} 
            desconto={props.produto.desconto_produto}/>
        <AdicionarProduto onClick={() => addToCart(props.produto)}>
            Adicionar
        </AdicionarProduto>
        </InformacoesProduto>
    </Card>
)
}
export default CardProdutos
