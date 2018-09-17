import { observer } from 'mobx-react';
import * as React from 'react';
import './App.scss';
import TranslationsLayout from './patterns/layouts/translations/TranslationsLayout';
import Header from './patterns/organisms/header/Header';
import RootStore from './store/RootStore';

interface IAppInterface {
    store: RootStore
}

@observer
class App extends React.Component<IAppInterface> {
    // move my api calls into services
    // do not test api calls (i.e services) unless they manipulate data
    // do not test stores unless they manipulate data
    // create layout (generic of specific) component and have
    // <div className="l-app"><LayoutX>...</LayoutX></div>
    // look into router

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
