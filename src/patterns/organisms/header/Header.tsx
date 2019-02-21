import { observer } from 'mobx-react';
import * as React from 'react';
import { ITranslationCategoryModel } from '../../../models/TranslationCategory';
import { RootStore } from '../../../store/RootStore';
import { TextForm } from '../../molecules/textForm/TextForm';
import './Header.scss';

interface IHeaderProps {
    store: RootStore,
    className?: string
}

export interface IHeaderState {
    addCategoryTextValue: string,
}

@observer
export class Header extends React.Component<IHeaderProps, IHeaderState> {
    public state: IHeaderState = {
        addCategoryTextValue: '',
    }

    public onAddCategorySubmit = () => {
        if (this.state.addCategoryTextValue === '') {
            return;
        }

        this.props.store.translationCategoryStore.create({ 
            title: this.state.addCategoryTextValue 
        });

        this.setState({ addCategoryTextValue: '' });
    }
  
    public onAddCategoryTextChange = (event: any) => {
        this.setState({ addCategoryTextValue: event.target.value });
    }

    public onDeleteTranslationCategoryButtonClick = (event: any) => {
        const category = this.props.store.translationCategoryStore.translationCategories.find(item =>
            parseInt(event.target.value, 10) === item.id
        );
        
        if (category) {
            this.props.store.translationCategoryStore.delete(category);
        }
    }

    public render() {
        return (
            <header className={'o-header ' + this.props.className}>
                <section className="o-header__categories">
                    <h2>Categories</h2>

                    <ul>
                        {this.props.store.translationCategoryStore.translationCategories.map((category: ITranslationCategoryModel, id: number) =>
                            <li key={id}>
                                <button aria-label={`Delete ${category.title} category`} 
                                        value={category.id}
                                        onClick={this.onDeleteTranslationCategoryButtonClick} 
                                />
                                {category.title}
                            </li>
                        )}
                    </ul>

                    <TextForm hasButton={false}
                              hasBackground={false}
                              hasLabel={false}
                              inputLabel="New Category" 
                              placeholder="New Category"
                              onSubmit={this.onAddCategorySubmit}
                              onTextChange={this.onAddCategoryTextChange} 
                    />
                </section>
            </header>
        )
    }
}