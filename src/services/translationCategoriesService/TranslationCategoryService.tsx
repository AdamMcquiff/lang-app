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

    public create(category: ITranslationCategoryModel): Promise<ITranslationCategoryModel> {
        return new Promise((resolve, reject) => {
            return axios.post(`http://localhost:3000/categories`, category) 
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    public delete(category: ITranslationCategoryModel): Promise<ITranslationCategoryModel> { 
        return new Promise((resolve, reject) => {
            return axios.delete(`http://localhost:3000/categories/${category.id}`)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });    
    }
}

export default new TranslationCategoryService();