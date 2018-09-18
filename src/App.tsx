import { observer } from 'mobx-react';
import * as React from 'react';
import './App.scss';
import TranslationsLayout from './patterns/layouts/translations/TranslationsLayout';
import { Header } from './patterns/organisms/header/Header';
import RootStore from './store/RootStore';

interface IAppInterface {
    store: RootStore
}

@observer
class App extends React.Component<IAppInterface> {
    public componentDidMount() { 
        this._requestApiDataFromServices();
    }

    public render() {
        return (
            <div className="l-app">
                <Header className="l-app__header" 
                        store={this.props.store} />
                        
                <TranslationsLayout className="l-app__main" 
                                    store={this.props.store} />
            </div>
        );
    }

    private _requestApiDataFromServices() {
        this.props.store.settingsStore.list();
        this.props.store.translationCategoryStore.list();
        this.props.store.translationStore.list();
    }
}

export default App;
