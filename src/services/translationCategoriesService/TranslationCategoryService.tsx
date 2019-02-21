import axios from 'axios';
import { ITranslationCategoryModel } from '../../models/TranslationCategory';
import { ITranslationCategoryService } from './TranslationCategoryServiceInterface';

export class TranslationCategoryService implements ITranslationCategoryService {
    public list(): Promise<ITranslationCategoryModel[]> {
        return new Promise((resolve, reject) => 
            axios.get(`http://localhost:3000/categories`) 
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }

    public create(category: ITranslationCategoryModel): Promise<ITranslationCategoryModel> {
        return new Promise((resolve, reject) =>
            axios.post(`http://localhost:3000/categories`, category) 
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }

    public delete(category: ITranslationCategoryModel): Promise<ITranslationCategoryModel> { 
        return new Promise((resolve, reject) => 
            axios.delete(`http://localhost:3000/categories/${category.id}`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );    
    }
}