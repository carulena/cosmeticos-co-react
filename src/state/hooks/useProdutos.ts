import { useRecoilValue } from "recoil"
import { ProductsListState } from "../atom"

export const useProdutos =()=>{
    return useRecoilValue(ProductsListState)
}