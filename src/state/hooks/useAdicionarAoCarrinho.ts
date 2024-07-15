import { useSetRecoilState } from "recoil";
import { CartListState } from "../atom";

export const useAdicionarAoCarrinho = () => {
    const setCart = useSetRecoilState(CartListState);
    return (produto: any) => {
      return setCart((list) => [...list, produto.produto_id]);
    };
  };
  