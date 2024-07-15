import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export const ListaDeProdutosState = atom<any[]>({
    key:'ProductsListState',
    default: [],
    effects: [persistAtom]
})



export const ListaDeComprasState = atom<number[]>({
    key:'CartListState',
    default: [],
    effects: [persistAtom]
})
