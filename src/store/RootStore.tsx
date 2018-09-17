import SettingsService from '../services/settingsService/SettingsService';
import TranslationCategoryService from '../services/translationCategoriesService/TranslationCategoryService';
import TranslationService from '../services/translationService/TranslationService';
import SettingsStore from './SettingsStore';
import TranslationCategoryStore from './TranslationCategoryStore';
import TranslationStore from './TranslationStore';

class RootStore {
	public settingsStore: SettingsStore;
	public translationCategoryStore: TranslationCategoryStore;
	public translationStore: TranslationStore;

	constructor() {
		this.settingsStore = new SettingsStore(this, SettingsService);
		this.translationCategoryStore = new TranslationCategoryStore(this, TranslationCategoryService);
		this.translationStore = new TranslationStore(this, TranslationService);
	}
}

export default RootStore;