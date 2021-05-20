import agent from "Axios/axiosMain";
import { useQuery } from "react-query";
import toastNotify from "Utils/toastNotify";
import { Town } from "Utils/types";

// Get all towns
const useGetTowns = () => {
  const {
    isLoading,
    data = [],
    error,
  } = useQuery<Town[], Error>(["towns"], async () => {
    try {
      const data = await agent.MainPage.getTowns();
      return data.data;
    } catch (err) {
      toastNotify(err.response.status);
      return err;
    }
  });
  return { isLoading, data, error };
};

export default useGetTowns;
