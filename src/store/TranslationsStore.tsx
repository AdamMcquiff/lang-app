import axios from 'axios';
import { observable } from 'mobx';
import RootStore from './RootStore';

class TranslationStore {
  @observable public translationCategories = [];
  @observable public translations = [];

  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  public getTranslationCategoryData() {
    axios.get(`http://localhost:3000/categories`) 
      .then(response => {
        this.translationCategories = response.data;
      }).catch(error => console.warn(error));
  }
  
  public getTranslationData() {
    axios.get(`http://localhost:3000/translations`) 
      .then(response => {
        this.translations = response.data;
      }).catch(error => console.warn(error));
  }
}

export default TranslationStore;