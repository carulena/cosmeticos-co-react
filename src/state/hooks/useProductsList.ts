import { useRecoilValue } from "recoil"
import { ProductsListState } from "../atom"

export const useProductsList =()=>{
    return useRecoilValue(ProductsListState)
}