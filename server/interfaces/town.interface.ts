export interface ShopInTown {
    id: String;
    name: String;
}

export interface CV {
    id: string;
    cv: string;
}

export interface Name {
    name: String;
}

export default interface Town {
    _id?: String;
    name: String;
    shops?: ShopInTown[];
    recruiting: Boolean;
    cv?: CV[];
}