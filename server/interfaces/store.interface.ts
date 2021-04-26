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
export interface Gallery {
    _id?: String;
    path: String;
}
export interface News {
    _id?: String;
    title: String;
    content: String;
    photo: Gallery;
    date?: Date;
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
    gallery: Gallery[];
}