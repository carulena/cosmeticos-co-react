import styled from "styled-components"

const Footer = () => {
    const Footer = styled.footer`
        height: 5vh;
        padding: 5vh;
        background-color:#F0F0F0;
        margin-top: 10vh;
        font-family: "Domine", serif; 
        font-weight: 900;
        font-style: normal;
        display:flex;
        align-items: center;
        position: relative;
        bottom:0;
        width:95.2%
    `
    const ListaFooter = styled.ul`
        list-style-type: none;
        height: 50px;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `
    return (<Footer>
        <p>Cosmeticos & Co</p>
        <ListaFooter>
            <li>
                Quem Somos
            </li>
            <li>
                Institucional
            </li>
        </ListaFooter>
        <ListaFooter>
            <li>
                Trabalhe Conosco
            </li>
            <li>
                Fale Conosco
            </li>
        </ListaFooter>
    </Footer>)
}

export default Footer