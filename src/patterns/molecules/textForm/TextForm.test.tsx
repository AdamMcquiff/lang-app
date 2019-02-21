import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { TextForm } from './TextForm';

describe('TextForm', () => {
    const props = {
        buttonA11yLabel: "Some label",
        buttonTextLabel: "Some label",
        hasButton: true,
        inputLabel: "Some label",
        onSubmit: jest.fn(),
        onTextChange: jest.fn(),
    };

    it('renders without crashing with only required props', () => {
        const component = shallow(<TextForm inputLabel={props.inputLabel} />);
        expect(component).toMatchSnapshot();
    });

    it('renders without crashing with all props', () => {
        const component = shallow(<TextForm {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders <button> element when hasButton is true', () => {
        const component = mount(<TextForm {...props} />);
        expect(component.find('.a-button').exists()).toBeTruthy();
    });

    it('does not render <button> element when hasButton is false', () => {
        const component = mount(<TextForm inputLabel={props.inputLabel} hasButton={false}/>);
        expect(component.find('.a-button').exists()).toBeFalsy();
    });

    it('onSubmit prop method is called after form is submitted via button press', () => {
        const component = mount(<TextForm {...props} />);

        component
            .find('button')
            .simulate('click');

        expect(props.onSubmit).toBeCalled();
        
        component.unmount();
    });

    it('onSubmit prop method is called after form is submitted via "enter" key press down', () => {
        const onSubmitMock = jest.fn();
        const component = mount(<TextForm onSubmit={onSubmitMock} inputLabel={props.inputLabel} />);
        
        expect(onSubmitMock).toHaveBeenCalledTimes(0);

        component
            .find('form')
            .simulate('keydown', { key: 'Enter' });

        expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });

    it('onSubmit class method is not called after user presses "arrow down" key', () => {
        const onSubmitMock = jest.fn();
        const component = mount(<TextForm onSubmit={onSubmitMock} inputLabel={props.inputLabel} />);

        expect(onSubmitMock).toHaveBeenCalledTimes(0);

        component
            .find('form')
            .simulate('keydown', { key: 40 });

        expect(onSubmitMock).toHaveBeenCalledTimes(0);
    });
});