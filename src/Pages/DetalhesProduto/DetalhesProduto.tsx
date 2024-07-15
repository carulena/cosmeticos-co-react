import { useParams } from "react-router-dom";
import ImagemProduto from "../../components/ImagemProduto/ImagemProduto";
import styled from "styled-components";
import PrecoProduto from "../../components/PrecoProduto/PrecoProduto";
import { useAdicionarAoCarrinho } from "../../state/hooks/useAdicionarAoCarrinho";
import { useProdutos } from "../../state/hooks/useProdutos";

const DetalhesProduto = () => {
    const { id } = useParams();
    const produtos = useProdutos()
    const produto = produtos.find((p) => p.produto_id === Number(id))
    const setCart = useAdicionarAoCarrinho()
    const addToCart = (produto: React.FormEvent<HTMLFormElement>) => {
        setCart(produto);
      };
    const Informacoes = styled.div`
        font-family: "Domine";
    `
    const AdicionarProduto = styled.button `
        margin-top: 50px;
        margin-left: 20px;
        width: 15vw;
        background-color:#F48646;
        height: 4vh;
        border:none; 
        border-radius: 25px;
        color:white;
        cursor:pointer;
        font-family: "Domine", serif;
    `
    return ( 
            <div style={{display: "flex", margin: "75px"}}>
                <ImagemProduto imagem={produto.imagem_produto} />
                <Informacoes>
                    <p style={{fontSize: "35px"}}>{produto.nome_produto}</p>
                    <p style={{width: "700px"}}>{produto.descricao_produto}</p>
                    <PrecoProduto preco={produto.valor_produto} 
                    desconto={produto.desconto_produto}/>
                    <AdicionarProduto onClick={() => addToCart(produto)}>
                        Adicionar
                    </AdicionarProduto>
                </Informacoes>
            </div>
    )
}

export default DetalhesProduto