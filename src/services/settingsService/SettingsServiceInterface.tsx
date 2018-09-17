import ISettingsModel from '../../models/Settings';

interface ISettingsService {
    list(): Promise<ISettingsModel>,
}

export default ISettingsService;