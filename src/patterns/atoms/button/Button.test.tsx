import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Button from './Button';

describe('Button', () => {
    const props = {
        a11yLabel: "Some label",
        onClick: jest.fn(),
        textLabel: "Some label"
    };

    it('renders without crashing', () => {
        const component = shallow(<Button />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly with a11yLabel prop passed', () => {
        const component = mount(<Button a11yLabel={props.a11yLabel} />);
        const renderedA11yLabel = component.find('button').getDOMNode().getAttribute('aria-label');
        expect(renderedA11yLabel).toEqual(props.a11yLabel); 
    });

    it('renders correctly with textLabel prop passed', () => {
        const component = mount(<Button textLabel={props.textLabel} />);
        const renderedTextLabel = component.find('button').text();
        expect(renderedTextLabel).toEqual(props.textLabel); 
    });

    it('renders correctly with onClick prop passed', () => {
        const component = mount(<Button onClick={props.onClick} />);
        component.find('button').simulate('click');
        expect(props.onClick).toBeCalled(); 
    });
});