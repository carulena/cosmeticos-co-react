import { useRecoilValue, useSetRecoilState } from "recoil";
import { ListaDeComprasState } from "../atom";

export const useRemoveUnidade = () => {
  const setCart = useSetRecoilState(ListaDeComprasState);
  const cart = useRecoilValue(ListaDeComprasState);
  return (produto: any) => {
    var index = cart.indexOf(produto.produto_id);
    return setCart(cart.filter((v,i) => i !== index));
  };
};
