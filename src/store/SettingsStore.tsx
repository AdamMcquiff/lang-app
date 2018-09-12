import axios from 'axios';
import { observable } from 'mobx';
import ISettingsModel from '../models/Settings';
import RootStore from './RootStore';

class SettingsStore {
    @observable public settings: ISettingsModel = {
        native_lang: '',
        translated_lang: ''
    };

    public rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }

    public getSettingsData() {
        axios.get(`http://localhost:3000/settings`) 
            .then(response => {
                this.settings = response.data;
            }).catch(error => console.warn(error));
    }
}

export default SettingsStore;