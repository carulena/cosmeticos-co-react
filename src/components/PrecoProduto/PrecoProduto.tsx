import { FunctionComponent } from "react"
import styled from "styled-components"

const PrecoProduto: FunctionComponent<{ preco: number, desconto: number }> = props => {
    const PrecoProduto = styled.div `
    font-size: 15px;
    display: flex
`

const ValorAntigo = styled.p `
    font-size: 12px;
    color:#6A6A6A;
     text-decoration: line-through;
`

const Desconto= styled.div `
display: flex;
    justify-content: space-between;
    width: 90px;
    align-items: center;
`
const DescontoProduto = styled.p `
    font-size: 10px;
    color: #FF3333;
    text-align: center;
    background-color: #FFEAEA;
    border-radius: 25px;
    width: 40px;
`
const ValorTotal = styled.div `
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
}   
`
    
    return (
 
         <PrecoProduto> {
             ( props.desconto ? 
                 <ValorTotal>
                 <p>R${(((100 - props.desconto)/100) * (props.preco)).toFixed(2)}</p>
                 <Desconto>
                     <ValorAntigo>
                         R${props.preco}
                     </ValorAntigo>
                     <DescontoProduto>{props.desconto}%</DescontoProduto>
                     </Desconto>
                     
                 </ValorTotal>:
                 <p>R${props.preco}</p>)
         }
             </PrecoProduto>
 )
 }
 export default PrecoProduto
 