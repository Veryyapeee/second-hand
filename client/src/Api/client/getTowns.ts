import axios from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Get towns
const getTowns = async () => {
    const { data } = await axios.get('/town').then(res => {
        return res;
    }).catch(err => {
        toastNotify(err.response.status);
        return err;
    });
    return data;
}

export default getTowns;