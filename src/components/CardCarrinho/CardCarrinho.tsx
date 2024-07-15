import { FunctionComponent } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";
import ImagemProduto from "../ImagemProduto/ImagemProduto";


const Card = styled.div `
    font-family: "Domine", serif;
    font-weight: 900;
    font-style: normal;
    text-align: start;
    display: flex;
    margin: 30px
`

const NomeProduto = styled.p `
    text-align: start;
    font-size: 15px;
`
// TODO: 
// * Preço com desconto
// * Adicionar imagem ao bucket
const CardCarrinho: FunctionComponent<{ produto: any }> = props => (
        <Card>
            <ImagemProduto imagem={props.produto.imagem_produto}/>
            <div>
            <NomeProduto>{props.produto.nome_produto}</NomeProduto>
            <p>R${props.produto.valor_produto}</p>
            </div>
        </Card>
    )


export default CardCarrinho;