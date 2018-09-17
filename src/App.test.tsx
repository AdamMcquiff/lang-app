import { mount, shallow } from 'enzyme';
import * as React from 'react';
import App from './App';
import RootStore from './store/RootStore';

const store: RootStore = new RootStore();

describe('App', () => {
    it('renders without crashing', () => {
        const component = shallow(<App store={store} />);
        expect(component).toMatchSnapshot();
    });

    it('should call requestApiDataFromServices method during componentDidMount', () => {
        const requestApiDataFromServicesFake = jest.spyOn<any, any>(App.prototype, '_requestApiDataFromServices');
        mount(<App store={store} />);
        expect(requestApiDataFromServicesFake).toHaveBeenCalledTimes(1);
    });
});