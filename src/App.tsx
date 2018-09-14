import { observer } from 'mobx-react';
import * as React from 'react';
import './App.scss';
import ICategoryModel from './models/Category';
import CategoryRow from './patterns/organisms/categoryRow/CategoryRow';
import Header from './patterns/organisms/header/Header';
import RootStore from './store/RootStore';

interface IAppInterface {
    store: RootStore
}

@observer
class App extends React.Component<IAppInterface> {
    public componentDidMount() { 
        this._requestApiDataFromStore();
    }

    public render() {
        return (
            <div className="l-app">
                <Header className="l-app__header" store={this.props.store} />

                <main className="l-app__main">
                    {this.props.store.translationStore.translationCategories.map((category: ICategoryModel, id: number) => {
                        return <CategoryRow key={id} 
                                            category={category} 
                                            settingsStore={this.props.store.settingsStore}
                                            translationStore={this.props.store.translationStore} />
                    })}
                </main>
            </div>
        );
    }

    private _requestApiDataFromStore() {
        this.props.store.settingsStore.getSettings();
        this.props.store.translationStore.getTranslationCategories();
        this.props.store.translationStore.getTranslations();
    }
}

export default App;
