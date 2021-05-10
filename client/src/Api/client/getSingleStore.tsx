import agent from "Axios/axiosMain";
import { useQuery } from "react-query";
import toastNotify from "Utils/toastNotify";

import { defaultStore, Store } from "Utils/types";

const useGetSingleStore = (townId: string, storeId: string) => {
  const { isLoading, data = defaultStore } = useQuery<Store, Error>(
    ["store", storeId],
    async () => {
      try {
        const data = await agent.MainPage.getSingleStore(townId, storeId);
        return data.data;
      } catch (err) {
        toastNotify(err.response.status);
        return err;
      }
    }
  );
  return { isLoading, data };
};

export default useGetSingleStore;
