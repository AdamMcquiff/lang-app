import SettingsStore from './SettingsStore';
import TranslationStore from './TranslationsStore';

class RootStore {
	public translationStore: TranslationStore;
	public settingsStore: SettingsStore;

	constructor() {
		this.translationStore = new TranslationStore(this);
		this.settingsStore = new SettingsStore(this);
	}
}

export default RootStore;