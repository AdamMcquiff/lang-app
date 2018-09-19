import { mount, shallow } from 'enzyme';
import * as React from 'react';
import TextInput from './TextInput';

describe('TextInput', () => {
    const props = {
        a11yLabel: "Some label",
        onTextChange: jest.fn(),
        textLabel: "Some label"
    };

    it('renders without crashing with no props', () => {
        const component = shallow(<TextInput />);
        expect(component).toMatchSnapshot();
    });

    it('renders without crashing with all props', () => {
        const component = shallow(<TextInput {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly with a11yLabel prop passed', () => {
        const component = mount(<TextInput a11yLabel={props.a11yLabel} />);
        const renderedA11yLabel = component.find('.a-text-input__a11y-label').text();
        expect(renderedA11yLabel).toEqual(props.a11yLabel); 
    });

    it('renders correctly with textLabel prop passed', () => {
        const component = mount(<TextInput textLabel={props.textLabel} />);
        const renderedTextLabel = component.find('.a-text-input__text-label').text();
        expect(renderedTextLabel).toEqual(props.textLabel); 
    });

    it('renders correctly with onTextChange prop passed', () => {
        const component = mount(<TextInput onTextChange={props.onTextChange} />);
        component.find('input').simulate('change');
        expect(props.onTextChange).toBeCalled(); 
    });
});