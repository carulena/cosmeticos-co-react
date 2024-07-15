import { useRecoilValue } from "recoil"
import { ListaDeComprasState } from "../atom"

export const useCarrinho =()=>{
    return useRecoilValue(ListaDeComprasState)
}