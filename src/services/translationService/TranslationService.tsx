import axios from 'axios';
import { ITranslationModel } from '../../models/Translation';
import { ITranslationService } from './TranslationServiceInterface';

export class TranslationService implements ITranslationService {
    public list(): Promise<ITranslationModel[]> {
        return new Promise((resolve, reject) =>
            axios.get(`http://localhost:3000/translations`) 
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }

    public create(translation: ITranslationModel): Promise<ITranslationModel> {
        return new Promise((resolve, reject) => 
            axios.post(`http://localhost:3000/translations`, translation) 
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }

    public update(translation: ITranslationModel): Promise<ITranslationModel> {
        return new Promise((resolve, reject) => 
            axios.put(`http://localhost:3000/translations/${translation.id}`, translation)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }

    public delete(translation: ITranslationModel): Promise<ITranslationModel> { 
        return new Promise((resolve, reject) => 
            axios.delete(`http://localhost:3000/translations/${translation.id}`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );    
    }
}