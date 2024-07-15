import styled from "styled-components"
import CardCarrinho from "../../components/CardCarrinho/CardCarrinho"
import { useCarrinho } from "../../state/hooks/useCarrinho"
import { separaUnicos } from "../../state/helpers/separaUnicos"
import Sumario from "../../components/Sumario/Sumario"

const Carrinho = () => {
    
    const cartItems = useCarrinho()
    const Body = styled.div`
        display: flex;
    `
    const Carrinho = styled.div`
        padding: 5vh 10vw 0 10vw;
        min-height: 100vh
    `
    const Navegacao = styled.p`
        font-family: "Domine", serif;
        color: black;
        a{
            color: #707070;
        }
    `
    const Cards = styled.div`
`
    const EmptyCart = styled.p`
        font-family: "Domine", serif;
        color: #707070;
        font-size:50px;
    `
    const uniques = separaUnicos(cartItems)
    return (
        <Carrinho>
            <Navegacao><a href="/">Inicio</a> &gt; Carrinho</Navegacao>
            <div>
            {cartItems.length > 0?
            <Body>
                <Cards>
           { Object.keys(uniques).map((p) => 
                <CardCarrinho 
                    produto_id={Number(p)}
                    qtde={uniques[p]}
                />
            )}
            </Cards>
            <Sumario></Sumario>
            </Body>
            :
            <EmptyCart>
                Opa! Nenhum produto por aqui
            </EmptyCart>
            }
            </div>
        </Carrinho>
    )
}

export default Carrinho