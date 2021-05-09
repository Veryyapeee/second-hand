import agent from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Get towns
const getMainPage = async (townId: string, storeId: string) => {
    try {
        const data = await agent.MainPage.getSingleStore(townId, storeId);
        return data.data
    } catch (err) {
        toastNotify(err.response.status);
        return err;
    }
}

export default getMainPage;