import { FunctionComponent } from "react"
import noimage from '../../assets/images/no-image-available.png'
import styled from "styled-components"

const Imagem = styled.img `
    width: 250px;
    height: 250px;
    border-radius: 20px;
`
const ImagemProduto: FunctionComponent<{ imagem: string }> = props => (

    <Imagem src={props.imagem ?? noimage}/>
)
export default ImagemProduto
