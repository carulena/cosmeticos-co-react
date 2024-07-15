import styled from "styled-components";
import CardProducts from "../../components/CardProducts/CardProducts";
import { useProductsList } from "../../state/hooks/useProductsList";

const Products = () => {
        
    const products:any[] = useProductsList()

    const Products = styled.div `
        padding: 5vw 10vw 0 10vw;
        min-height: 100vh;
    `
    return(
        <Products>
          {products.map(p =>
                <CardProducts produto={p}/>
            )}
        </Products>
)};
export default Products