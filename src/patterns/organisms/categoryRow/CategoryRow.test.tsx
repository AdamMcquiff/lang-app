import { mount, shallow } from 'enzyme';
import { when } from 'mobx';
import * as React from 'react';
import { ITranslationModel } from '../../../models/Translation';
import { ITranslationCategoryModel } from '../../../models/TranslationCategory';
import { ITranslationService } from '../../../services/translationService/TranslationServiceInterface';
import { RootStore } from '../../../store/RootStore';
import { CategoryRow } from './CategoryRow';

const translations = [{
    categoryId: 1,
    native_word: "Hello",
    translated_word: "Hallo"
}, {
    categoryId: 2,
    native_word: "Thanks",
    translated_word: "Danke"
}]

class MockTranslationService implements ITranslationService {
    public create(translation: ITranslationModel): Promise<ITranslationModel> {
        return Promise.resolve(translation);
    }

    public list(): Promise<ITranslationModel[]> {
        return Promise.resolve(translations);
    }

    public update(translation: ITranslationModel) {
        return Promise.resolve(translation);
    }

    public delete(translation: ITranslationModel) {
        return Promise.resolve(translation);
    }
}

const rootStore = new RootStore();
rootStore.translationStore.service = new MockTranslationService();

describe('CategoryRow', () => {
    const category: ITranslationCategoryModel = {
        id: 1,
        title: 'Test'
    };

    const props = {
        category,
        settingsStore: rootStore.settingsStore,
        translationStore: rootStore.translationStore
    };

    beforeEach(() => {
        rootStore.translationStore.list();
    });

    it('renders without crashing with all props', () => {
        const component = shallow(<CategoryRow {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('has label that correctly displays number of translations with 1 translation', () => {
        const component = mount(<CategoryRow {...props} />);
        const label = component.find('p').text();
        expect(label).toEqual("1 translation");
    });

    it('computed filteredTranslations method should contain one translation object', () => {
        const component = mount(<CategoryRow {...props} />);
        const instance = component.instance() as CategoryRow;

        expect(instance.filteredTranslations).toHaveLength(1);
        expect(instance.filteredTranslations).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    categoryId: translations[0].categoryId,
                    native_word: translations[0].native_word,
                    translated_word: translations[0].translated_word,
                })
            ])
        );

        component.unmount();
    });

    it('computed totalNumberOfTranslations method should return a value of "1"', () => {
        const component = mount(<CategoryRow {...props} />);
        const instance = component.instance() as CategoryRow;

        expect(instance.totalNumberOfTranslations).toEqual(1);
        component.unmount();
    });

    it('should add a new translation on "Add" button click', (done) => {
        const component = mount(<CategoryRow {...props} />);
        const instance = component.instance() as CategoryRow;
        const onAddTranslationButtonClickMock = jest.spyOn<any, any>(instance, 'onAddTranslationButtonClick');

        expect(onAddTranslationButtonClickMock).toHaveBeenCalledTimes(0);
        expect(instance.totalNumberOfTranslations).toEqual(1);

        component
            .find('button.m-category-row__add-button')
            .simulate('click');
        
        when(() => instance.totalNumberOfTranslations === 2, () => {
            expect(instance.filteredTranslations).toHaveLength(2);
            done();
        });
    });
});