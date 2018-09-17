import axios from 'axios';
import ITranslationModel from '../../models/Translation';
import ITranslationService from './TranslationServiceInterface';

class TranslationService implements ITranslationService {
    public list(): Promise<ITranslationModel[]> {
        return new Promise((resolve, reject) => {
            return axios.get(`http://localhost:3000/translations`) 
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    public create(translation: ITranslationModel): Promise<ITranslationModel> {
        return new Promise((resolve, reject) => {
            return axios.post(`http://localhost:3000/translations`, translation) 
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    public update(translation: ITranslationModel): Promise<ITranslationModel> {
        return new Promise((resolve, reject) => {
            return axios.put(`http://localhost:3000/translations/${translation.id}`, translation)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    public delete(translation: ITranslationModel): Promise<ITranslationModel> { 
        return new Promise((resolve, reject) => {
            return axios.delete(`http://localhost:3000/translations/${translation.id}`)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });    
    }
}

export default new TranslationService();