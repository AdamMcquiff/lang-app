import { observer } from 'mobx-react';
import * as React from 'react';
import './App.scss';
import Category from './patterns/organisms/categoryRow/CategoryRow';
import Header from './patterns/organisms/header/Header';
import RootStore from './store/RootStore';

interface IAppInterface {
    store: RootStore
}

@observer
class App extends React.Component<IAppInterface> {
    public componentDidMount() { 
        this.props.store.settingsStore.getSettingsData();
        this.props.store.translationStore.getTranslationCategoryData();
        this.props.store.translationStore.getTranslationData();
    }

    public render() {
        return (
            <div className="l-app">
                <Header className="l-app__header" store={this.props.store} />

                <main className="l-app__main">
                    {this.props.store.translationStore.translationCategories.map((category: any, id: number) => {
                        return <Category key={id} 
                                         categoryId={category.id} 
                                         settingsStore={this.props.store.settingsStore}
                                         translationStore={this.props.store.translationStore} />
                    })}
                </main>
            </div>
        );
    }
}

export default App;
