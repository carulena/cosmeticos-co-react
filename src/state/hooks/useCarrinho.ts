import { useRecoilValue } from "recoil"
import { CartListState } from "../atom"

export const useCarrinho =()=>{
    return useRecoilValue(CartListState)
}