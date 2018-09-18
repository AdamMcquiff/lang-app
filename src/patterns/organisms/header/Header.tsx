import { observer } from 'mobx-react';
import * as React from 'react';
import ITranslationCategoryModel from '../../../models/TranslationCategory';
import RootStore from '../../../store/RootStore';
import TextForm from '../../molecules/textForm/TextForm';
import './Header.scss';

interface IHeaderProps {
    store: RootStore,
    className?: string
}

interface IHeaderState {
    addCategoryTextValue: string
}

@observer
class Header extends React.Component<IHeaderProps, IHeaderState> {
    public state: IHeaderState = {
        addCategoryTextValue: ''
    }

    public onAddCategorySubmit = () => {
        this.props.store.translationCategoryStore.create({ 
            title: this.state.addCategoryTextValue 
        });
    }
  
    public onAddCategoryTextChange = (event: any) => {
        this.setState({ addCategoryTextValue: event.target.value })
    }

    public render() {
        return (
            <header className={'o-header ' + this.props.className}>
                <h2>Categories</h2>
                
                <ul>
                    {this.props.store.translationCategoryStore.translationCategories.map((category: ITranslationCategoryModel, id: number) => {
                        return <li key={id}>
                            {category.title}
                        </li>
                    })}
                </ul>

                <TextForm hasButton={false}
                          inputLabel="New Category" 
                          onSubmit={this.onAddCategorySubmit}
                          onTextChange={this.onAddCategoryTextChange}/>
            </header>
        )
    }
}

export default Header;