import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Finalizado = () => {
    
    const Body = styled.p`
        padding: 50px;    
        display: flex;
        height: 80vh;
        font-family: "Domine", serif;
        font-weight: 900;
        font-style: normal;
            flex-direction: column;
    align-items: center;
        p{
        color: #707070;
        font-size:50px;}
    `

    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/")
    }, 2000)
    return (
        <Body>
            <p>Obrigada por comprar conosco :) </p>
            <h6>voce será redirecionado para a página principal em breve</h6>
        </Body>
    )
}

export default Finalizado