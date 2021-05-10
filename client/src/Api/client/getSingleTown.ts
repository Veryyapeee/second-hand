import agent from 'Axios/axiosMain';
import { useQuery } from 'react-query';
import toastNotify from 'Utils/toastNotify';
import { defaultTown, Town } from 'Utils/types';

// Get single town
const useGetSingleTown = (townId: string) => {
    const { isLoading, data = defaultTown } = useQuery<Town, Error>(
        ["town", townId],
        async () => {
            try {
                const data = await agent.MainPage.getSingleTown(townId);
                return data.data;
            } catch (err) {
                toastNotify(err.response.status);
                return err;
            }
        }
    );
    return { isLoading, data };
};

export default useGetSingleTown;