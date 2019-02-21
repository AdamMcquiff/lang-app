import { shallow } from 'enzyme';
import * as React from 'react';
import { RootStore } from '../../../store/RootStore';
import { TranslationsLayout } from './TranslationsLayout';

const store = new RootStore();
store.translationCategoryStore.translationCategories = [{
    id: 1, title: 'Some category'
}]

describe('TranslationLayout', () => {
    const props = { 
        className: 'some class',
        store 
    };

    it('renders without crashing with all props', () => {
        const component = shallow(<TranslationsLayout {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders without crashing with only required props', () => {
        const component = shallow(<TranslationsLayout store={props.store} />);
        expect(component).toMatchSnapshot();
    });

    it('renders correct number of CategoryRow elements', () => {
        const component = shallow(<TranslationsLayout store={props.store} />);
        expect(component.find('CategoryRow').length).toEqual(1);
    });
});