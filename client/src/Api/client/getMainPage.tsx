import { useQuery } from "react-query";
import agent from "Axios/axiosMain";
import toastNotify from "Utils/toastNotify";

import { MainPage, defaultMainPage } from "Utils/types";

const useGetMainPage = () => {
  const { isLoading, data = defaultMainPage } = useQuery<MainPage, Error>(
    "mainPage",
    async () => {
      try {
        const data = await agent.MainPage.getMainPage();
        return data.data;
      } catch (err) {
        toastNotify(err.response.status);
        return err;
      }
    }
  );

  return { isLoading, data };
};

export default useGetMainPage;
