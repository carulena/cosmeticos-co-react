import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export const ProductsListState = atom<any[]>({
    key:'ProductsListState',
    default: []
})


export const CartListState = atom<any[]>({
    key:'CartListState',
    default: [],
    effects_UNSTABLE: [persistAtom],
})
