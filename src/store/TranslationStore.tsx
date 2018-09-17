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
            // TODO: replace with alternative
            this.list();
        });
    }

    public delete = (translation: ITranslationModel) => {
        this.service.delete(translation).then(() => {
            // TODO: replace with alternative
            this.list();
        });
    }
}

export default TranslationStore;