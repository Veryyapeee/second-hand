export interface Town {
    _id: string,
    name: string,
    recruiting: boolean;
    shops: ShopInTown[];
    cv: CV[];
}

export interface MainPage {
    _id: string;
    covidInfo: CovidInfo;
    description: string;
    news: MainPageNews[];
}

export interface CovidInfo {
    enabled: boolean;
    content: string;
}

export interface CV {
    _id: string;
    name: string;
    lastName: string;
    email: string;
    cv: string;
}

export interface MainPageNews {
    date: string;
    _id: string;
    title: string;
    content: string;
    photo: {
        _id: string;
        path: string;
    }
}

export interface ShopInTown {
    id: string;
    name: string;
}

export interface StoreAddress {
    street: string;
    town: string;
}
export interface Store {
    store: {
        _id: string;
        name: string;
        description: string;
        address: StoreAddress;
        contact: string;
        suppDay: string;
        news: MainPageNews[];
        gallery: Gallery[];
        openHours: OpenHours;
        price: StorePrice;
    }
}

export interface Gallery {
    _id?: String;
    path: String;
}

export interface OpenHours {
    monday: String,
    tuesday: String;
    wednesday: String;
    thursday: String;
    friday: String;
    saturday: String;
    sunday: String;
}

export interface StorePrice {
    monday: number,
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
}

export const defaultMainPage = {
    _id: '',
    covidInfo: {
        enabled: false,
        content: '',
    },
    description: '',
    news: []
}

export const defaultTown = {
    _id: '',
    name: '',
    recruiting: false,
    shops: [],
    cv: [],
}

export const defaultStore = {
    store: {
        _id: '',
        name: '',
        description: '',
        address: {
            street: '',
            town: '',
        },
        contact: '',
        suppDay: '',
        news: [],
        gallery: [],
        openHours: {},
        price: {},
    }

}

export const weekDays: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

export type TParams = { townId: string; storeId: string };