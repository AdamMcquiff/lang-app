import { observer } from 'mobx-react';
import * as React from 'react';
import './App.scss';
import Category from './Category';
import Header from './patterns/organisms/Header';
import RootStore from './store/RootStore';

interface IAppInterface {
  store: RootStore
}

@observer
class App extends React.Component<IAppInterface> {
  public componentDidMount() { 
    this.props.store.translationStore.getTranslationCategoryData();
    this.props.store.translationStore.getTranslationData();
  }


  public render() {
    return (
      <div className="l-app">
        <Header store={this.props.store} />

        <main>
          <p>I am the main</p>

          {this.props.store.translationStore.translationCategories.map((category: any, id: number) => {
            return <Category key={id} 
                             categoryId={category.id} 
                             translationStore={this.props.store.translationStore} />
          })}
        </main>
      </div>
    );
  }
}

export default App;
