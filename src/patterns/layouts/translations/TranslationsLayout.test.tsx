import { shallow } from 'enzyme';
import * as React from 'react';
import RootStore from '../../../store/RootStore';
import TranslationsLayout from './TranslationsLayout';

const store = new RootStore();

describe('TranslationLayout', () => {
    const props = {
        store
    };

    it('renders without crashing', () => {
        const component = shallow(<TranslationsLayout {...props} />);
        expect(component).toMatchSnapshot();
    });
});