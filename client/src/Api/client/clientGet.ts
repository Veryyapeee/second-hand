import { request } from 'Axios/axiosMain';

import { MainPage, Town, Store } from 'Utils/types';

const Main = {
    getMainPage: () => request.get<MainPage>(`/mainPage/608708cf4c6c2b29e0ac83d9`),
    getSingleTown: (townId: string) => request.get<Town>(`/town/${townId}`),
    getTowns: () => request.get<Town[]>('/town'),
    getSingleStore: (townId: string, storeId: string) => request.get<Store>(`/town/${townId}/store/${storeId}`),
}

export default Main;