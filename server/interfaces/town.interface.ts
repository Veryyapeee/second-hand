export interface ShopInTown {
    id: String;
    name: String;
}

export interface CV {
    _id?: String | undefined;
    name: String;
    lastName: String;
    email: String;
    cv: String;
}

export interface Name {
    name: String;
}

export interface Status {
    recruiting: Boolean;
}

export interface History {
    name: String;
    shops: ShopInTown[];
    recruiting: Boolean;
    cv: CV[];
    user: String;
    date: Date;
}
export default interface Town {
    _id: String;
    name: String;
    shops: ShopInTown[];
    recruiting: Boolean;
    cv: CV[];
    history: History[];
}