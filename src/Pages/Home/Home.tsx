import styled from 'styled-components'
import { useProductsList } from '../../state/hooks/useProductsList';
import arraia from '../../assets/images/arraia.png'
import CardHome from '../../components/CardHome/CardHome';

        // display: flex;
        // align-items: center;
        // justify-content: space-evenly;
const Home = () => {
    const products:any[] = useProductsList()
    const Home = styled.div `
        text-align: center;
    `
     const HomePhoto = styled.img `
     max-height: 100vh;
     margin: auto;
     max-width: 100%;
    `
    const SectionTitle = styled.p `
        font-family: "Domine", serif;
        font-weight: 900;
        font-style: normal;
        font-size: 30px;
    `
    const Cards = styled.div `
        display: grid;
        padding: 0 10vw 0 10vw;
    `

    const BotaoCarregar = styled.button `
        width: 12vw;
        height: 4vh;
        font-family: "Domine", serif;
        font-weight: 900;
        font-style: normal;
        border-radius: 25px;
        border: #E5E5E5 solid 1px;
        background-color: white;
        &:hover{
            border: white solid 1px;
            background-color: #E5E5E5 
        }
        a{
            text-decoration: none;
            color: black;
        }
    `
    return(
        <Home>
            <HomePhoto src={arraia}/>
            <SectionTitle>Descubra as fragâncias que combinam com você</SectionTitle>
            <Cards>{products.slice(0,3).map((p, i) =>
                <CardHome produto={p} key={i}/>
            )}</Cards>
            <BotaoCarregar>
                <a href='/produtos'>
                Carregar outros
                </a>
            </BotaoCarregar>
        </Home>
)};
export default Home