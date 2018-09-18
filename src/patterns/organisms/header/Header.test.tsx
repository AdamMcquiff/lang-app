import { mount, shallow } from 'enzyme';
import { when } from 'mobx';
import * as React from 'react';
import RootStore from '../../../store/RootStore';
import Header from './Header';

const store = new RootStore();

describe('Header', () => {
    const props = {
        store,
    }

    it('renders without crashing', () => {
        const component = shallow(<Header {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('updates addCategoryTextValue state when TextForm value is changed', () => {
        const component = mount(<Header {...props} />);
        
        const newValue = "some value";

        component
            .find('input')
            .simulate('change', { target: { value: newValue }});

        expect(component.state().addCategoryTextValue).toEqual(newValue); 
    });

    it('adds new TranslationCategory on form submit', (done) => {
        const component = mount(<Header {...props} />);
        const instance = component.instance() as Header;
        const onAddCategorySubmitMock = jest.spyOn<any, any>(instance, 'onAddCategorySubmit');

        expect(onAddCategorySubmitMock).toHaveBeenCalledTimes(0);
        expect(component.props().store.translationCategoryStore.translationCategories.length).toEqual(0);

        component
            .find('form')
            .simulate('keydown', { key: 'Enter' });

        when(() => component.props().store.translationCategoryStore.translationCategories.length === 1, () => {
            expect(component.props().store.translationCategoryStore.translationCategories.length).toEqual(1);
            done();
        });
    });
});