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

const ValorAntigo = styled.p `
    font-size: 12px;
    color:#6A6A6A;
     text-decoration: line-through;
`

const Desconto= styled.div `
display: flex;
    justify-content: space-between;
    width: 90px;
    align-items: center;
`
const DescontoProduto = styled.p `
    font-size: 10px;
    color: #FF3333;
    text-align: center;
    background-color: #FFEAEA;
    border-radius: 25px;
    width: 40px;
`
const ValorTotal = styled.div `
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
}   
`


// TODO: 
// * Preço com desconto
// * Adicionar imagem ao bucket
const CardHome: FunctionComponent<{ produto: any }> = props => (
        <Card>
            <ImagemProduto imagem={props.produto.imagem_produto}/>
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
            
            <PrecoProduto> {
                ( props.produto.desconto_produto ? 
                    <ValorTotal>
                    <p>R${(((100 - props.produto.desconto_produto)/100) * (props.produto.valor_produto)).toFixed(2)}</p>
                    <Desconto>
                        <ValorAntigo>
                            R${props.produto.valor_produto}
                        </ValorAntigo>
                        <DescontoProduto>{props.produto.desconto_produto}%</DescontoProduto>
                        </Desconto>
                        
                    </ValorTotal>:
                    <p>R${props.produto.valor_produto}</p>)
            }
                </PrecoProduto>
        </Card>
    )


export default CardHome;