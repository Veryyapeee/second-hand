import agent from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Get towns
const getMainPage = async () => {
    try {
        const data = await agent.MainPage.getMainPage();
        return data.data
    } catch (err) {
        toastNotify(err.response.status);
        return err;
    }
}

export default getMainPage;