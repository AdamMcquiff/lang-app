import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { ITranslationModel } from '../../../models/Translation';
import { RootStore } from '../../../store/RootStore';
import { TranslationCard } from './TranslationCard';

const rootStore = new RootStore();

describe('TranslationCard', () => {
    const translation: ITranslationModel = {
        categoryId: 1,
        native_word: "Hello",
        translated_word: "Hallo"
    };

    const props = {
        settingsStore: rootStore.settingsStore,
        translation,
        translationStore: rootStore.translationStore,
    }

    it('renders without crashing with all props', () => {
        const component = shallow(<TranslationCard {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders with the correct default values in input fields', () => {
        const component = mount(<TranslationCard {...props} />);
        const nativeInputDefaultValue = component
            .find('textarea.m-translation-card__native-field-input')
            .props()
            .value;

        const translatedInputDefaultValue = component
            .find('textarea.m-translation-card__translated-field-input')
            .props()
            .value;
            
        expect(nativeInputDefaultValue).toEqual(translation.native_word);
        expect(translatedInputDefaultValue).toEqual(translation.translated_word);
    });

    it('onTranslationFieldTextChange is called on translation field input change', () => {
        const component = mount(<TranslationCard {...props} />);
        const newValue = "Some new value";

        expect(component
            .find('textarea.m-translation-card__translated-field-input')
            .props()
            .value
        ).toEqual(translation.translated_word);   

        component
            .find('textarea.m-translation-card__translated-field-input')
            .simulate('change', { target: { value: newValue } });

        expect(component
            .find('textarea.m-translation-card__translated-field-input')
            .props()
            .value
        ).toEqual(newValue);
    });

    it('onNativeFieldTextChange is called on native field input change', () => {
        const component = mount(<TranslationCard {...props} />);
        const newValue = "Some new value";

        expect(component
            .find('textarea.m-translation-card__native-field-input')
            .props()
            .value
        ).toEqual(translation.native_word);
        
        component
            .find('textarea.m-translation-card__native-field-input')
            .simulate('change', { target: { value: newValue } });

        expect(component
            .find('textarea.m-translation-card__native-field-input')
            .props()
            .value
        ).toEqual(newValue);
    });
});