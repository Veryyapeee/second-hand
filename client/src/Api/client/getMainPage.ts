import axios from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Get towns
const getMainPage = async () => {
    const { data } = await axios.get(`/mainPage/${'608708cf4c6c2b29e0ac83d9'}`).then(res => {
        return res;
    }).catch(err => {
        toastNotify(err.response.status);
        return err;
    });
    return data;
}

export default getMainPage;