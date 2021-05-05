export interface Town {
    _id: string,
    name: string,
    recruiting: boolean;
    shops: any;
    cv: string;
}

export interface MainPage {
    _id: string;
    covidInfo: CovidInfo;
    description: string;
    news: any
}

export interface CovidInfo {
    enabled: boolean;
    content: string;
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