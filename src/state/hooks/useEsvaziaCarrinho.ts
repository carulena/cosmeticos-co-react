import { useSetRecoilState } from "recoil"
import { CartListState} from "../atom"

export const useEsvaziaCarrinho = () =>{
    const setCart = useSetRecoilState(CartListState);
    return () => {
        return setCart([]);
      };
}