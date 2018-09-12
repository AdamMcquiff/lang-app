import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import RootStore from './store/RootStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store: RootStore = new RootStore();
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
