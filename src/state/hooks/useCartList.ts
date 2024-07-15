import { useRecoilValue } from "recoil"
import { CartListState } from "../atom"

export const useCartList =()=>{
    return useRecoilValue(CartListState)
}