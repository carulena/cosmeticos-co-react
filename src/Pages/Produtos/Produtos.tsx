import styled from "styled-components";
import CardProdutos from "../../components/CardProdutos/CardProdutos";
import { useProdutos } from "../../state/hooks/useProdutos";

const Products = () => {
        
    const products:any[] = useProdutos()

    const Products = styled.div `
        padding: 5vw 10vw 0 10vw;
        min-height: 100vh;
        display: grid;
	    grid-template-columns: 1fr 1fr;
        column-gap: 50px;
        row-gap: 50px;
        
    `
    return(
        <Products>
          {products.map(p =>
                <CardProdutos produto={p}/>
            )}
        </Products>
)};
export default Products