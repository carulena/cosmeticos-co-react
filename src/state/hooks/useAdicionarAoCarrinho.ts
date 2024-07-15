import { useSetRecoilState } from "recoil";
import { ListaDeComprasState } from "../atom";

export const useAdicionarAoCarrinho = () => {
    const setCart = useSetRecoilState(ListaDeComprasState);
    return (produto: any) => {
      return setCart((list) => [...list, produto.produto_id]);
    };
  };
  