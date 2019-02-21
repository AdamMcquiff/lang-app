import { ISettingsModel } from '../../models/Settings';

export interface ISettingsService {
    list(): Promise<ISettingsModel>,
}