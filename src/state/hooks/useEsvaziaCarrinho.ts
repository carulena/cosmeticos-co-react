import { useSetRecoilState } from "recoil"
import { ListaDeComprasState} from "../atom"

export const useEsvaziaCarrinho = () =>{
    const setCart = useSetRecoilState(ListaDeComprasState);
    return () => {
        return setCart([]);
      };
}