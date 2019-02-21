import { observable } from 'mobx';
import { ITranslationCategoryModel } from '../models/TranslationCategory';
import { ITranslationCategoryService } from '../services/translationCategoriesService/TranslationCategoryServiceInterface';
import { RootStore } from './RootStore';

export class TranslationCategoryStore {
    @observable 
    public translationCategories: ITranslationCategoryModel[] = [];

    public rootStore: RootStore;
    public service: ITranslationCategoryService;

    constructor(rootStore: RootStore, service: ITranslationCategoryService) {
        this.rootStore = rootStore
        this.service = service;
    }

    public list = () => {
        this.service.list().then((categories: ITranslationCategoryModel[]) => {
            this.translationCategories = categories;
        });
    }

    public create = (category: ITranslationCategoryModel) => {
        this.service.create(category).then((data: ITranslationCategoryModel) => {
            this.translationCategories.push(data);
        });
    }

    public delete = (category: ITranslationCategoryModel) => {
        this.service.delete(category).then(() => {
            this.translationCategories = this.translationCategories.filter(
                item => item.id !== category.id ? item : false
            );
        });
    }
}