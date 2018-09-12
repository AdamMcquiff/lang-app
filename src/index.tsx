import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import RootStore from './store/RootStore';

const rootStore: RootStore = new RootStore();

ReactDOM.render(
  <App store={rootStore} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
