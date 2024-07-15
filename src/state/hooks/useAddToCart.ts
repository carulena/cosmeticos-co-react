import { useSetRecoilState } from "recoil";
import { CartListState } from "../atom";

export const useAddToCart = () => {
    const setCart = useSetRecoilState(CartListState);
    return (produto: any) => {
      return setCart((list) => [...list, produto]);
    };
  };
  