import styled from 'styled-components'
import { useProductsList } from '../../state/hooks/useProductsList';
import { useFetchProductsList } from '../../state/hooks/useFetchProductsList';
import arraia from '../../assets/images/arraia.png'

const Home = () => {
    useFetchProductsList()
    const products:any[] = useProductsList()
    const Home = styled.div `
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    `
     const HomePhoto = styled.div `
        width: 95vw;
        height: 60vh;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url(${arraia})
    `
    return(
        <Home>
            <HomePhoto/>
        </Home>
)};
export default Home