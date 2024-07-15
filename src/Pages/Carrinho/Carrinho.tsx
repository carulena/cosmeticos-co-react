import styled from "styled-components"
import CardCarrinho from "../../components/CardCarrinho/CardCarrinho"
import { useCartList } from "../../state/hooks/useCartList"

const Carrinho = () => {
    
    const cartItems = useCartList()
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
    const EmptyCart = styled.p`
        font-family: "Domine", serif;
        color: #707070;
        font-size:50px;
    `
    
    const MaisProdutos = styled.button `
        width: 12vw;
        height: 4vh;
        font-family: "Domine", serif;
        font-weight: 900;
        font-style: normal;
        border-radius: 25px;
        border: #E5E5E5 solid 1px;
        background-color: #F48646;
        text-align:center;
        a{
            color: white;
        }
    `
    return (
        <Carrinho>
            <Navegacao><a href="/">Inicio</a> &gt; Carrinho</Navegacao>
            {cartItems.length> 0?
            cartItems.map((p) => 
                <CardCarrinho 
                produto={p}
                />
            ):
            <EmptyCart>
                Opa! Nenhum produto por aqui
            </EmptyCart>
            }
            <MaisProdutos>
                <a href='/produtos'>
                Ver mais produtos
                </a>
            </MaisProdutos>
        </Carrinho>
    )
}

export default Carrinho