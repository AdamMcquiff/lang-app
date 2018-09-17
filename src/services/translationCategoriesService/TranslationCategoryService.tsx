import axios from 'axios';
import ITranslationCategoryModel from '../../models/TranslationCategory';
import ITranslationCategoryService from './TranslationCategoryServiceInterface';

class TranslationCategoryService implements ITranslationCategoryService {
    public list(): Promise<ITranslationCategoryModel[]> {
        return new Promise((resolve, reject) => {
            return axios.get(`http://localhost:3000/categories`) 
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    public create(translation: ITranslationCategoryModel): Promise<ITranslationCategoryModel> {
        return new Promise((resolve, reject) => {
            return axios.post(`http://localhost:3000/categories`, translation) 
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }
}

export default new TranslationCategoryService();