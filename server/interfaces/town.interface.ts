export interface ShopInTown {
    id: String;
    name: String;
}

export interface CV {
    _id?: String;
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

export default interface Town {
    _id?: String;
    name: String;
    shops?: ShopInTown[];
    recruiting: Boolean;
    cv?: CV[];
}