import { selector, useRecoilValue, useSetRecoilState } from "recoil"
import { ListaDeProdutosState } from "../atom"
export const useFetchProdutos= () =>{
    const setList = useSetRecoilState(ListaDeProdutosState);
    return fetch('https://xfgxkvs7gg.execute-api.us-east-1.amazonaws.com/produtos')
    .then(response => response.json().then(json => 
        setList(json)
    ))
}