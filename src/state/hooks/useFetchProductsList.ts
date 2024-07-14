import { selector, useRecoilValue, useSetRecoilState } from "recoil"
import { ProductsListState } from "../atom"

function transformToJson(response:Response) {
    return response.json().then(json => 
        json
    );
}    
function  fetchProducts (){
    return fetch('https://xfgxkvs7gg.execute-api.us-east-1.amazonaws.com/produtos')
    .then(transformToJson)
}
const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({get}) => {
      const response = await fetchProducts();
      return response;
    },
  });
export const useFetchProductsList= () =>{
    const setList = useSetRecoilState(ProductsListState);
    return setList(useRecoilValue(currentUserNameQuery))
}