import agent from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Get towns
const getTown = async (townId: string) => {
    try {
        const data = await agent.MainPage.getSingleTown(townId);
        return data.data;
    } catch (err) {
        toastNotify(err.response.status);
        return err;
    }
}

export default getTown;