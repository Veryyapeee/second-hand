import { OpenHours } from './store.interface';

export interface Price {
    monday: {
        shoes: String;
    },
    tuesday: {
        shoes: String;
    },
    wednesday: {
        shoes: String;
    },
    thursday: {
        shoes: String;
    },
    friday: {
        shoes: String;
    },
    saturday: {
        shoes: String;
    },
    sunday: {
        shoes: String;
    },
}

export interface History {
    _id: String;
    storeId: String;
    description: String;
    openHours: OpenHours,
    price: Price,
    user: String;
    date: Date
}

export default interface CheapStore {
    _id: String;
    storeId: String;
    description: String;
    openHours: OpenHours,
    price: Price,
    history: History[],
}