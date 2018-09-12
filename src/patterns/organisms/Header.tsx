import * as React from 'react';
import RootStore from '../../store/RootStore';
import TextForm from '../molecules/TextForm';
import './Header.scss';

interface IHeaderProps {
    store: RootStore
}

interface IHeaderState {
    addCategoryTextValue: string
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    public state: IHeaderState = {
        addCategoryTextValue: ""
    }

    constructor(props: IHeaderProps) {
        super(props);
        this.onAddCategoryButtonClick = this.onAddCategoryButtonClick.bind(this);
        this.onAddCategoryTextChange = this.onAddCategoryTextChange.bind(this);
    }

    public onAddCategoryButtonClick() {
        this.props.store.translationStore.createTranslationCategory({ 
            name: this.state.addCategoryTextValue 
        });
    }
  
    public onAddCategoryTextChange(event: any) {
        this.setState({ addCategoryTextValue: event.target.value })
    }

    public render() {
        return (
            <header className="o-header">
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