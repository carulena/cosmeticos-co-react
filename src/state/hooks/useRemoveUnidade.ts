import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartListState } from "../atom";

export const useRemoveUnidade = () => {
  const setCart = useSetRecoilState(CartListState);
  const cart = useRecoilValue(CartListState);
  return (produto: any) => {
    var index = cart.indexOf(produto.produto_id);
    return setCart(cart.filter((v,i) => i !== index));
  };
};
