export interface StoreAddress {
    town: String;
    street: String;
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

export interface News {
    title: String;
    content: String;
    photo: String;
}

export interface StoreHistory {
    id: String;
    name: String;
    description: String;
    address: StoreAddress;
    contact: String;
    openHours: OpenHours;
    suppDay: String;
    price: StorePrice;
    news: News[];
    gallery: String[];
    userName: String;
    date: Date;
}

export default interface Store {
    _id: String;
    name: String;
    description: String;
    address: StoreAddress;
    contact: String;
    openHours: OpenHours;
    suppDay: String;
    price: StorePrice;
    news: News[];
    gallery: String[];
    History: StoreHistory[];
}