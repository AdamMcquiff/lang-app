import * as React from 'react';
import ICategoryModel from '../../../models/Category';
import RootStore from '../../../store/RootStore';
import TextForm from '../../molecules/textForm/TextForm';
import './Header.scss';

interface IHeaderProps {
    store: RootStore,
    className: string
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
            title: this.state.addCategoryTextValue 
        });
    }
  
    public onAddCategoryTextChange(event: any) {
        this.setState({ addCategoryTextValue: event.target.value })
    }

    public render() {
        return (
            <header className={'o-header ' + this.props.className}>
                <TextForm buttonA11yLabel="Add new category"
                          buttonTextLabel="Add"
                          inputLabel="New Category" 
                          onButtonClick={this.onAddCategoryButtonClick}
                          onTextChange={this.onAddCategoryTextChange}/>

                <h2>Categories</h2>

                <ul>
                    {this.props.store.translationStore.translationCategories.map((category: ICategoryModel, id: number) => {
                        return <li key={id}>
                            {category.title}
                        </li>
                    })}
                </ul>
            </header>
        )
    }
}

export default Header;