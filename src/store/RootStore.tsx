import TranslationStore from './TranslationsStore';

class RootStore {
	public translationStore: TranslationStore;

	constructor() {
		this.translationStore = new TranslationStore(this);
	}
}

export default RootStore;