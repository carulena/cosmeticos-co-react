import { useRecoilValue } from "recoil"
import { ListaDeProdutosState } from "../atom"

export const useProdutos =()=>{
    return useRecoilValue(ListaDeProdutosState)
}