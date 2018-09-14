import { shallow } from 'enzyme';
import * as React from 'react';
import App from './App';
import RootStore from './store/RootStore';
const store: RootStore = new RootStore();

it('renders without crashing', () => {
    const component = shallow(<App store={store} />);
    expect(component).toMatchSnapshot();
});

it('should call requestApiDataFromStore method', () => {
    const spy = jest.spyOn(App.prototype, '_requestApiDataFromStore');
    shallow(<App store={store} />);
    expect(spy).toHaveBeenCalled();
});