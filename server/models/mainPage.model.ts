import mongoose from 'mongoose';

import { newsSchema } from './store.model';
import MainPage from '../interfaces/mainPage.interface';

const covidInfoSchema = new mongoose.Schema({
    enabled: {
        type: Boolean,
        required: true,
    },
    content: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    }
})

const mainPageSchema = new mongoose.Schema({
    description: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    covidInfo: { covidInfoSchema },
    news: [
        newsSchema
    ]
})

const mainPageModel = mongoose.model<MainPage & mongoose.Document>('MainPage', mainPageSchema);
export default mainPageModel;