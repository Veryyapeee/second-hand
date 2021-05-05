import axios from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Get towns
const getTown = async (townId: string) => {
    const { data } = await axios.get(`/town/${townId}`).then(res => {
        return res;
    }).catch(err => {
        toastNotify(err.response.status);
        return err;
    });
    return data;
}

export default getTown;