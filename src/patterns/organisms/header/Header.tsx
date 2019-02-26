import { observer } from 'mobx-react';
import * as React from 'react';
import { Dialog } from 'src/patterns/molecules/dialog/Dialog';
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
    categoryId: string | undefined,
    isDisplayingDeleteDialog: boolean
}

@observer
export class Header extends React.Component<IHeaderProps, IHeaderState> {
    public state: IHeaderState = {
        addCategoryTextValue: '',
        categoryId: '',
        isDisplayingDeleteDialog: false
    };

    public onAddCategorySubmit = () => {
        if (this.state.addCategoryTextValue === '') {
            return;
        }

        this.props.store.translationCategoryStore.create({ 
            title: this.state.addCategoryTextValue 
        });

        this.setState({ addCategoryTextValue: '' });
    };
  
    public onAddCategoryTextChange = (event: any) => {
        this.setState({ addCategoryTextValue: event.target.value });
    };

    public handleOnDialogConfirm = () => {
        if (!this.state.categoryId) {
            return;
        }

        const category = this.props.store.translationCategoryStore.translationCategories.find(item =>
            parseInt(this.state.categoryId || '', 10) === item.id
        );

        if (category) {
            this.props.store.translationCategoryStore.delete(category);
        }

        this.closeDialog();
    };

    public openDialog = (event: any) => {

        this.setState({ 
            categoryId: event.target.value,
            isDisplayingDeleteDialog: true 
        })
    };

    public closeDialog = () => {
        this.setState({ isDisplayingDeleteDialog: false });
    };

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
                                        onClick={this.openDialog}
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

                   <Dialog id="dialog-delete-confirmation"
                           isOpen={this.state.isDisplayingDeleteDialog} 
                           title={"Are you sure?"}
                           body={"Oh no! Removing this translation is irreversible. Continue?"}
                           onDialogCancel={this.closeDialog} 
                           onDialogConfirm={this.handleOnDialogConfirm} 
                    />
                </section>
            </header>
        )
    }
}