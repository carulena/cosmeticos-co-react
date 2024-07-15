import styled from "styled-components";
import { useProdutos } from "../../state/hooks/useProdutos";
import { useCarrinho } from "../../state/hooks/useCarrinho";
import { CiShoppingTag } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { useEsvaziaCarrinho } from "../../state/hooks/useEsvaziaCarrinho";
import { useNavigate } from "react-router-dom";

const Sumario = () => {
  const carrinho = useCarrinho();
  const produtos = useProdutos();
  
  const esvazia_carrinho = useEsvaziaCarrinho()
  const [desconto, setDesconto] = useState(0);

  const aplicaDesconto = () => {
    if (inputRef.current?.value === "cosmeticos20") {
        setDesconto(20);
    }
  };
  //busca por todos os valores dos produtos no carrinho
  const total = carrinho.map((c) => {
    const p = produtos.find((p) => p.produto_id === c);
    //verifica se há desconto para aquele produto
    if (p.desconto_produto) {
      return Number(
        (((100 - p.desconto_produto) / 100) * p.valor_produto).toFixed(1)
      );
    }
    return Number(p.valor_produto);
  }).reduce((soma, valor) => soma + valor, 0)
  .toFixed(2);

  //frete fixo 
  const frete = 10;
  const navigate = useNavigate();
  
  const inputRef = useRef<HTMLInputElement>(null);

  const finalizarCompra = () => {
    esvazia_carrinho();
    navigate("/finalizado");
  }
  
  const Summary = styled.div`
    font-family: "Domine", serif;
    font-weight: 900;
    font-style: normal;
    text-align: start;
    display: flex;
    margin: 30px;
    padding: 30px;
    border: 1px solid #e5e5e5;
    flex-direction: column;
    width: 400px;
    height: 400px;
    position: fixed;
    float: right;
    right:0;
  `;
  const Informacoes = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Label = styled.p`
    color: #666666;
  `;
  const Line = styled.div`
    height: 1px;
    background: #666666;
  `;
  const Cupom = styled.input`
    height: 30px;
    font-family: "Domine", serif;
    background-color: #f0f0f0;
    border: none;
    border-radius: 0 25px 25px 0;
  `;
  const Icon = styled.div`
    height: 30px;
    width: 30px;
    background-color: #f0f0f0;
    border-radius: 25px 0 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const BotaoCupom = styled.button`
    font-family: "Domine", serif;
    height: 30px;
    width: 80px;
    border-radius: 25px;
    border: none;
    background: black;
    color: white;
    margin-left: 10px;
    font-size: 12px;
    cursor: pointer;
  `;
  const Finalizar = styled.button`
    font-family: "Domine", serif;
    height: 40px;
    width: 100%;
    border-radius: 25px;
    border: none;
    background: #f48646;
    color: white;
    margin-top: 15px;
    font-size: 12px;
    cursor: pointer;
  `;

  return (
    <Summary>
      <p style={{ fontSize: "20px" }}>Sumário</p>
      <Informacoes>
        <Label>Subtotal</Label>
        <p>R${Number(total)}</p>
      </Informacoes>

      {desconto ? (
        <Informacoes>
          <Label>Desconto (-{desconto}%)</Label>
          <p style={{ color: "red" }}>
            -R${((desconto / 100) * Number(total)).toFixed(2)}
          </p>
        </Informacoes>
      ) : null}

      <Informacoes>
        <Label>Frete</Label>
        <p>R${frete}</p>
      </Informacoes>
      <Line />
      <Informacoes>
        <p>Total</p>
        <p>R${(frete + (Number(total) - (desconto / 100) * Number(total))).toFixed(2)}</p>
      </Informacoes>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon>
            <CiShoppingTag />
          </Icon>
          <Cupom
            ref={inputRef}
            key="cupom"
            placeholder="Cupom"
          />
          <style>
            {` 
                    ::placeholder { 
                        
                        color: #666666; 
                    }`}
          </style>
        </div>
        <BotaoCupom onClick={() => aplicaDesconto()}>Aplicar</BotaoCupom>
      </div>
      <Finalizar onClick={() => finalizarCompra()}>
        Finalizar compra <FaArrowRight />
      </Finalizar>
    </Summary>
  );
};
export default Sumario;
