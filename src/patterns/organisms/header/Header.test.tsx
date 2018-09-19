import { mount, shallow } from 'enzyme';
import { when } from 'mobx';
import * as React from 'react';
import RootStore from '../../../store/RootStore';
import { Header, IHeaderState } from './Header';

const store = new RootStore();

describe('Header', () => {
    const props = {
        className: 'Some class',
        store
    }

    it('renders without crashing with all props', () => {
        const component = shallow(<Header {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders without crashing with required props', () => {
        const component = shallow(<Header store={props.store} />);
        expect(component).toMatchSnapshot();
    });

    it('updates addCategoryTextValue state when TextForm value is changed', () => {
        const component = mount(<Header {...props} />);
        const newValue = "some value";

        component
            .find('input')
            .simulate('change', { target: { value: newValue }});

        const state = component.state() as IHeaderState;
        expect(state .addCategoryTextValue).toEqual(newValue); 
    });

    it('creates new TranslationCategory on form submit', (done) => {
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