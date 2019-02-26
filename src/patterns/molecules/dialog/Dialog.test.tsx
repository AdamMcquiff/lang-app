import { shallow } from "enzyme";
import * as React from 'react';
import { Dialog } from "./Dialog";

describe('Dialog', () => {
    const props = { 
        id: "dialog"
    };

    it('renders without crashing with all props', () => {
        const component = shallow(<Dialog {...props} />);
        expect(component).toMatchSnapshot();
    });
});