import styled from 'styled-components'
import { useProductsList } from '../../state/hooks/useProductsList';
import { useFetchProductsList } from '../../state/hooks/useFetchProductsList';
import arraia from '../../assets/images/arraia.png'
import Card from '../Card/Card';

        // display: flex;
        // align-items: center;
        // justify-content: space-evenly;
const Home = () => {
    useFetchProductsList()
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
    return(
        <Home>
            <HomePhoto src={arraia}/>
            <SectionTitle>Descubra as fragâncias que combinam com você</SectionTitle>
            <Cards>{products.map(p =>
                <Card produto={p}/>
            )}</Cards>
        </Home>
)};
export default Home