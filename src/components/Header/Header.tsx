import styled from "styled-components";
import Busca from "../Busca/Busca";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { useFetchProdutos } from "../../state/hooks/useFetchProdutos";
import { useCarrinho } from "../../state/hooks/useCarrinho";

const Header = () => {

  useFetchProdutos()
  const cartItems = useCarrinho()
  const Header = styled.div`
    align-items: center;
    height: 20vh;
    font-family: "Domine", serif;
    width: 98.9vw;
    border-bottom: 2px #707070 solid;
    box-shadow: 0px 1px 5px 0px #707070;
  `;
  const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    margin: 0 15% 0 5% ;
  `;
  const Banner = styled.div`
    background-color: #4e4e4e;
    height: 5vh;
    color: white;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    font-size: 15px;
  `;
  const Title = styled.p`
    font-weight: 900;
    font-style: normal;
    font-size: 35px;
    a{
      color: black;
      text-decoration: none;
    }
  `;
  const Products = styled.p`
    font-family: "Domine", serif;
    font-style: normal;
    font-size: 15px;
    border: none;
    margin:0 3vw 0 3vw
`;
const Icons = styled.div`
    display:flex;
    margin-left: 5%;
    justify-content: space-between;
    min-width: 6vw;
    align-items:center;
`
const Cart = styled.a`
    display:flex;
    align-items:center;
    color:black;
`
const ItemCart = styled.p`
      background-color: #F48646;
      color:white;
      text-align: center;
      border-radius: 50%;
      height: 20px;
      font-size:12px;
      width: 20px;
      align-content: center;

`
  return (
    <Header>
      <Banner>Aproveite as nossas oportunidades!!!</Banner>

      <HeaderBody>
        <Title><a href="/">Cosméticos&Co</a></Title>
       <Products><a href="/produtos">Produtos</a></Products>
        <Busca/>
        <Icons>
        <Cart href="/carrinho">
          <PiShoppingCartSimpleBold size={30}/>
         <ItemCart>{cartItems.length}

         </ItemCart>
        </Cart>
        <FaRegCircleUser size={30}/>
        </Icons>
      </HeaderBody>
    </Header>
  );
};

export default Header;