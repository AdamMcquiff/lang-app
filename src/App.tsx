import { observer } from 'mobx-react';
import * as React from 'react';
import './App.scss';
import ITranslationCategoryModel from './models/TranslationCategory';
import CategoryRow from './patterns/organisms/categoryRow/CategoryRow';
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
                <Header className="l-app__header" store={this.props.store} />

                <main className="l-app__main">
                    {this.props.store.translationCategoryStore.translationCategories.map((category: ITranslationCategoryModel, id: number) => {
                        return <CategoryRow key={id} 
                                            category={category} 
                                            settingsStore={this.props.store.settingsStore}
                                            translationStore={this.props.store.translationStore} />
                    })}
                </main>
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
