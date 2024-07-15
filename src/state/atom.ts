import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export const ProductsListState = atom<any[]>({
    key:'ProductsListState',
    default: [],
    effects: [persistAtom]
})


export const CartListState = atom<number[]>({
    key:'CartListState',
    default: [],
    effects: [persistAtom]
})
