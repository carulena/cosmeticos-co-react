import { useRecoilValue, useSetRecoilState } from "recoil";
import { ListaDeComprasState } from "../atom";

export const useRemoveCarrinho = () => {
  const setCart = useSetRecoilState(ListaDeComprasState);
  const cart = useRecoilValue(ListaDeComprasState);
  return (produto: any) => {
    return setCart(cart.filter((v) => v !== produto.produto_id));
  };
};
