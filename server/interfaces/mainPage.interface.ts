import { News } from './store.interface';

interface CovidInfo {
    enabled: Boolean;
    content: String;
}

export default interface MainPage {
    _id: String,
    description: String,
    covidInfo: CovidInfo;
    news: News[],
}