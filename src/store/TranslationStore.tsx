import { observable } from 'mobx';
import ITranslationModel from '../models/Translation';
import ITranslationService from '../services/translationService/TranslationServiceInterface';
import RootStore from './RootStore';

class TranslationStore {
    @observable public translations: ITranslationModel[] = [];

    public rootStore: RootStore;
    public service: ITranslationService;
    
    constructor(rootStore: RootStore, service: ITranslationService) {
        this.rootStore = rootStore
        this.service = service;
    }
  
    public list = () => {
        this.service.list().then((translations: ITranslationModel[]) => {
            this.translations = translations;
        });
    }

    public create = (translation: ITranslationModel) => {
        this.service.create(translation).then((data: ITranslationModel) => {
            this.translations.push(data);
        });
    }

    public update = (translation: ITranslationModel) => {
        this.service.update(translation).then((data: ITranslationModel) => {
            this.translations = this.translations.map(item => {
                if (item.id === translation.id) {
                    item = translation;
                }
                return item;
            });
        });
    }

    public delete = (translation: ITranslationModel) => {
        this.service.delete(translation).then(() => {
            this.translations = this.translations.filter(item => {
                if (item.id !== translation.id) {
                    return item;
                }
                return false;
            });
        });
    }
}

export default TranslationStore;