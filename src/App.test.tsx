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

    it('should call requestApiDataFromStore method during componentDidMount', () => {
        const requestApiDataFromStoreFake = jest.spyOn<any, any>(App.prototype, '_requestApiDataFromStore');
        mount(<App store={store} />);
        expect(requestApiDataFromStoreFake).toHaveBeenCalledTimes(1);
    });
});