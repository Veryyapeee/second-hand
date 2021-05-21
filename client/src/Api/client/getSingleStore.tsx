import agent from "Axios/axiosMain";
import { useQuery } from "react-query";
import toastNotify from "Utils/toastNotify";

import { defaultStoreData, StoreData } from "Utils/types";

const useGetSingleStore = (townId: string, storeId: string) => {
  const {
    isLoading,
    data = defaultStoreData,
    error,
  } = useQuery<StoreData, Error>(["store", storeId], async () => {
    try {
      const data = await agent.MainPage.getSingleStore(townId, storeId);
      return data.data;
    } catch (err) {
      toastNotify(err.response.status);
      return err;
    }
  });
  return { isLoading, data, error };
};

export default useGetSingleStore;
