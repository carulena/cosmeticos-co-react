import { FunctionComponent } from "react"
import ImagemProduto from "../ImagemProduto/ImagemProduto"
import styled from "styled-components"
import { useProductsList } from "../../state/hooks/useProductsList"
import { useFetchProductsList } from "../../state/hooks/useFetchProductsList"
import PrecoProduto from "../PrecoProduto/PrecoProduto"
import { useAddToCart } from "../../state/hooks/useAddToCart"

const Card = styled.div `
    font-family: "Domine", serif;
    font-weight: 900;
    font-style: normal;
    text-align: start;
    display:flex;
`

const NomeProduto = styled.p `
    text-align: start;
    font-size: 20px;
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
    width: 100%;
    background-color:#F48646;
    height: 4vh;
    border:none; 
    border-radius: 25px;
    color:white;
    cursor:pointer;
    font-family: "Domine", serif;
`
const CardProducts: FunctionComponent<{ produto: any }> = props => {
    const setCart = useAddToCart()
    const addToCart = (produto: React.FormEvent<HTMLFormElement>) => {
        setCart(produto);
      };
   return (
    <Card>
        <ImagemProduto imagem={props.produto.imagem_produto}/>
        <InformacoesProduto>
        <NomeProduto>{props.produto.nome_produto}</NomeProduto>
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
export default CardProducts
