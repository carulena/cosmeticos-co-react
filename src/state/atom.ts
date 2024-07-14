import { atom } from "recoil";

export const ProductsListState = atom<[]>({
    key:'ProductsListState',
    default: []
})
