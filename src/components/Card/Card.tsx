import { FunctionComponent } from "react";
import noimage from '../../assets/images/no-image-available.png'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";


const CardProduto = styled.div `
    font-family: "Domine", serif;
    font-weight: 900;
    font-style: normal;
    text-align: start;
`
const ImagemProduto = styled.img `
    width: 250px;
    height: 250px;
    border-radius: 20px;
`

const NomeProduto = styled.p `
    text-align: start;
    font-size: 15px;
`
const TamanhoProduto = styled.p `
    font-size: 12px;
`

const AvaliacaoProduto = styled.div `
font-size: 15px;
display: flex
`
const PrecoProduto = styled.div `
    font-size: 15px;
    display: flex
`

// TODO: 
// * Preço com desconto
// * Adicionar imagem ao bucket
const Card: FunctionComponent<{ produto: any }> = props => (
        <CardProduto>
        <ImagemProduto src={props.produto.image ?? noimage}/>
        <NomeProduto>{props.produto.nome_produto}</NomeProduto>
        <TamanhoProduto>{props.produto.tamanho_produto}</TamanhoProduto>
        <AvaliacaoProduto>
        <div>
        {[...Array((Math.floor(props.produto.avaliacao_produto) ?? 2))].map((x, i) =>
                <FaStar key={i}  color="#FFC633" />
            )
        }
        {
            ((props.produto.avaliacao_produto ?? 4.5) % 1 !== 0) ? <FaStarHalfAlt color="#FFC633"/> : null
        }
        </div>
        {props.produto.avaliacao_produto}/<p style={{ fontSize:'8px', color: '#6A6A6A'}}>5</p>
        </AvaliacaoProduto>
        
        <PrecoProduto>R${props.produto.valor_produto}</PrecoProduto>
        </CardProduto>
    )


export default Card;