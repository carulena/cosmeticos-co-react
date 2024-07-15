    import styled from 'styled-components'
import { FaSearch  } from "react-icons/fa";


const Busca = () => {
    const Search = styled.div `
    display:flex
`
    const SearchBox = styled.input `
        width: 40vw;
        height: 50px;
        border: none;
        background-color: #F0F0F0;
        border-radius: 0 35px 35px 0;       
        font-family: "Domine";
        ::placeholder {
            color: deepPink;
            font-size: 1.2em;
            font-style: italic;
        }
    `
    const IconBox = styled.div `
        height: 52px;
        width: 50px;
        background-color: #F0F0F0;
        border-radius: 35px 0 0 35px; 
        color:#BABABA;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    return(
        <Search>
        <IconBox>
            <FaSearch  />
        </IconBox>
        <SearchBox placeholder="O que você está buscando hoje?"  />
        <style> 
                {` 
                    ::placeholder { 
                        color: #BABABA; 
                    }` 
                } 
            </style> 
        </Search>
)};
export default Busca