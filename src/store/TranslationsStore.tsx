import axios from 'axios';
import { observable } from 'mobx';
import ICategoryModel from '../models/Category';
import ITranslationModel from '../models/Translation';
import RootStore from './RootStore';

class TranslationStore {
    @observable public translationCategories: ICategoryModel[] = [];
    @observable public translations: ITranslationModel[] = [];

    public rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }

    public getTranslationCategories() {
        axios.get(`http://localhost:3000/categories`) 
            .then(response => {
                this.translationCategories = response.data;
            }).catch(error => console.warn(error));
    }
  
    public getTranslations() {
        axios.get(`http://localhost:3000/translations`) 
            .then(response => {
                this.translations = response.data;
            }).catch(error => console.warn(error));
    }

    public createTranslationCategory(category: ICategoryModel) {
        axios.post(`http://localhost:3000/categories`, category) 
            .then(response  => {
                this.translationCategories.push(response.data);
            }).catch(error => console.warn(error));
    }

    public createTranslation(translation: ITranslationModel) {
        axios.post(`http://localhost:3000/translations`, translation) 
            .then(response  => {
                this.translations.push(response.data);
            }).catch(error => console.warn(error));
    }

    public updateTranslation(translation: ITranslationModel) {
        axios.put(`http://localhost:3000/translations/${translation.id}`, translation)
            .then(response => {
                this.translations = this.translations.map(item => {
                    if (item.id === translation.id) {
                        item = translation;
                    }
                    return item;
                });
            })
    }
}

export default TranslationStore;