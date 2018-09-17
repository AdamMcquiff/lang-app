import { mount, shallow } from 'enzyme';
import * as React from 'react';
import TextForm from './TextForm';

describe('TextForm', () => {
    const props = {
        buttonA11yLabel: "Some label",
        buttonTextLabel: "Some label",
        hasButton: true,
        inputLabel: "Some label",
        onSubmit: jest.fn(),
        onTextChange: jest.fn(),
    };

    it('renders without crashing', () => {
        const component = shallow(<TextForm {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders <button> element when hasButton is true', () => {
        const component = mount(<TextForm {...props} />);

        expect(component
            .find('.a-button')
            .exists()
        ).toBeTruthy();
    });

    it('does not render <button> element when hasButton is false', () => {
        const component = mount(<TextForm inputLabel={props.inputLabel} hasButton={false}/>);
        
        expect(component
            .find('.a-button')
            .exists()
        ).toBeFalsy();
    });

    it('onSubmit prop method is called after form is submitted via "enter" key press down', () => {
        const component = mount(<TextForm {...props} />);

        component
            .find('form')
            .simulate('keydown', { key: 'Enter' });

        expect(props.onSubmit).toBeCalled();
    });
});