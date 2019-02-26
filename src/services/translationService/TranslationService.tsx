import axios from 'axios';
import { ITranslationModel } from '../../models/Translation';
import { ITranslationService } from './TranslationServiceInterface';

export class TranslationService implements ITranslationService {
    public list(): Promise<ITranslationModel[]> {
        return new Promise((resolve, reject) =>
            axios.get(`${process.env.REACT_APP_API_URL}/translations`) 
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }

    public create(translation: ITranslationModel): Promise<ITranslationModel> {
        return new Promise((resolve, reject) => 
            axios.post(`${process.env.REACT_APP_API_URL}/translations`, translation) 
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }

    public update(translation: ITranslationModel): Promise<ITranslationModel> {
        return new Promise((resolve, reject) => 
            axios.put(`${process.env.REACT_APP_API_URL}/translations/${translation.id}`, translation)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }

    public delete(translation: ITranslationModel): Promise<ITranslationModel> { 
        return new Promise((resolve, reject) => 
            axios.delete(`${process.env.REACT_APP_API_URL}/translations/${translation.id}`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );    
    }
}