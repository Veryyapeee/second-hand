import axios from 'Axios/axiosMain';
import toastNotify from 'Utils/toastNotify';

// Example here, make it better
const getTowns = async () => {
    const { data } = await axios.get('/town').then(res => {
        toastNotify(res.status);
        return res;
    }).catch(err => {
        toastNotify(err.response.status);
        return err;
    });
    return data;
}

export default getTowns;