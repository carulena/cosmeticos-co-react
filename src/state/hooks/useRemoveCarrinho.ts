import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartListState } from "../atom";

export const useRemoveCarrinho = () => {
  const setCart = useSetRecoilState(CartListState);
  const cart = useRecoilValue(CartListState);
  return (produto: any) => {
    return setCart(cart.filter((v) => v !== produto.produto_id));
  };
};
