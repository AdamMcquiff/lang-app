import axios from 'axios';
import ISettingsModel from '../../models/Settings';
import ISettingsService from './SettingsServiceInterface';

class SettingsService implements ISettingsService {
    public list(): Promise<ISettingsModel> {
        return new Promise((resolve, reject) => {
            return axios.get(`http://localhost:3000/settings`) 
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }
}

export default new SettingsService();