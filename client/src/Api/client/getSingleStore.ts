import axios from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Get towns
const getMainPage = async (townId: string, storeId: string) => {
    const { data } = await axios.get(`/town/${townId}/store/${storeId}`).then(res => {
        return res;
    }).catch(err => {
        toastNotify(err.response.status);
        return err;
    });
    return data;
}

export default getMainPage;