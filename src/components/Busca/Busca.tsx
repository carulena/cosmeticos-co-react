import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import { useProdutos } from "../../state/hooks/useProdutos";
import './Busca.css'
const Busca = () => {
  const Search = styled.div`
    display: flex;
  `;

  const IconBox = styled.div`
    height: 52px;
    width: 50px;
    background-color: #f0f0f0;
    border-radius: 35px 0 0 35px;
    color: #bababa;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const produtos = useProdutos();

  const navigate = useNavigate();
  const busca = (event: any) => {
    navigate(`/detalhes/${event[0].produto_id}`);
  };
  return (
    <Search>
      <IconBox>
        <FaSearch />
      </IconBox>
        <Typeahead
          className="typeahead"
          id="basic-typeahead-single"
          labelKey="nome_produto"
          onChange={(event) => busca(event)}
          options={produtos}
          placeholder="O que você está buscando hoje?"
        />
      {/* <SearchBox placeholder="O que você está buscando hoje?"  />
        <style> 
                {` 
                    ::placeholder { 
                        color: #BABABA; 
                    }` 
                } 
            </style>  */}
    </Search>
  );
};
export default Busca;
