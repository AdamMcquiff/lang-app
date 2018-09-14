import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import RootStore from './store/RootStore';

const store: RootStore = new RootStore();

it('renders without crashing', () => {
    const component = shallow(<App store={store} />);
    expect(component).toMatchSnapshot();
});