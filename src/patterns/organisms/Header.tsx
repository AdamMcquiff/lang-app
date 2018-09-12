import * as React from 'react';
import RootStore from '../../store/RootStore';
import TextForm from '../molecules/TextForm';

interface IHeaderProps {
    store: RootStore
}

class Header extends React.Component<IHeaderProps> {
    constructor(props: IHeaderProps) {
      super(props);
      this.onAddCategoryButtonClick = this.onAddCategoryButtonClick.bind(this);
    }

    public onAddCategoryButtonClick() {
      const category = { name: 'test' };
      this.props.store.translationStore.createTranslationCategory(category);
    }
  
    public onAddCategoryTextChange(event: any) {
      console.log(event.target.value)
    }

    public render() {
        return (
            <header>
                <TextForm buttonA11yLabel="Add new category"
                          buttonTextLabel="Add"
                          inputLabel="New Category" 
                          onButtonClick={this.onAddCategoryButtonClick}
                          onTextChange={this.onAddCategoryTextChange}/>
            </header>
        )
    }
}

export default Header;