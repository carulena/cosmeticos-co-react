import styled from 'styled-components'
import { useProdutos } from '../../state/hooks/useProdutos';
import arraia from '../../assets/images/arraia.png'
import CardHome from '../../components/CardHome/CardHome';

        // display: flex;
        // align-items: center;
        // justify-content: space-evenly;
const Home = () => {
    const products:any[] = useProdutos()
    const Home = styled.div `
        text-align: center;
    `
     const HomePhoto = styled.img `
     max-height: 100%;
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
        display: flex;
        padding: 0 10vw 0 10vw;
        justify-content: space-around;
    `
    const CupomDesconto = styled.div `
        font-family: "Domine", serif;
        padding: 25px;
        justify-content: space-around;
        z-index: 5;
        position: fixed;
        width:250px;
        border-bottom: 2px #f48646 solid;
        box-shadow: 0px 1px 5px 0px #f48646;
        border-radius: 0 15px 15px 0;
        background: white; 
        p{
            color:#f48646
        }
`
    const BotaoCarregar = styled.button `
        width: 150px;
        height: 40px;
        font-family: "Domine", serif;
        font-weight: 900;
        margin-top:50px;
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
            <CupomDesconto>Use o cupom <p>cosmeticos20</p> para ganhar 20% de desconto</CupomDesconto>
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