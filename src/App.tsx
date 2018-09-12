import { observer } from 'mobx-react';
import * as React from 'react';
import './App.scss';
import Category from './Category';
import Button from './patterns/atoms/Button';
import RootStore from './store/RootStore';

interface IAppInterface {
  store: RootStore
}

@observer
class App extends React.Component<IAppInterface> {
  constructor(props: IAppInterface) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  public componentDidMount() { 
    this.props.store.translationStore.getTranslationCategoryData();
    this.props.store.translationStore.getTranslationData();
  }

  public onBtnClick() {
    const category = { name: 'test' };
    this.props.store.translationStore.createTranslationCategory(category);
  }

  public onTextChange(event: any) {
    console.log(event.target.value)
  }

  public render() {
    return (
      <div className="l-app">
        <header>
          <p>I am a header</p>

          <input type="text" onChange={this.onTextChange} />
          <Button a11yLabel="Add new category" 
                  textLabel="Add Category"
                  onClick={this.onBtnClick}/>
        </header>

        <main>
          <p>I am the main</p>

          {this.props.store.translationStore.translationCategories.map((category: any, id: number) => {
            return <Category categoryId={category.id} key={id} translationStore={this.props.store.translationStore}/>
          })}
        </main>
      </div>
    );
  }
}

export default App;
