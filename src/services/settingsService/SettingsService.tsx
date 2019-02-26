import axios from 'axios';
import { ISettingsModel } from '../../models/Settings';
import { ISettingsService } from './SettingsServiceInterface';

export class SettingsService implements ISettingsService {
    public list(): Promise<ISettingsModel> {
        return new Promise((resolve, reject) => 
            axios.get(`${process.env.REACT_APP_API_URL}/settings`) 
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        );
    }
}