import agent from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Get towns
const getTowns = async () => {

    try {
        const data = await agent.MainPage.getTowns();
        return data.data
    } catch (err) {
        toastNotify(err.response.status);
        return err;
    }
}

export default getTowns;