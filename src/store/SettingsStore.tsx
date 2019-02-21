import { observable } from 'mobx';
import { ISettingsModel } from '../models/Settings';
import { ISettingsService } from '../services/settingsService/SettingsServiceInterface';
import { RootStore } from './RootStore';

export class SettingsStore {
    @observable 
    public settings: ISettingsModel = {
        native_lang: '',
        translated_lang: ''
    };

    public rootStore: RootStore;
    public service: ISettingsService;
    
    constructor(rootStore: RootStore, service: ISettingsService) {
        this.rootStore = rootStore;
        this.service = service;
    }

    public list() {
        this.service.list().then((settings: ISettingsModel) => {
            this.settings = settings;
        });
    }
}