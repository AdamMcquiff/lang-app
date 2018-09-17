import { observer } from 'mobx-react';
import * as React from 'react';
import ITranslationCategoryModel from '../../../models/TranslationCategory';
import RootStore from '../../../store/RootStore';
import CategoryRow from '../../organisms/categoryRow/CategoryRow';
import './TranslationsLayout.scss';

interface ITranslationInterface {
    store: RootStore,
    className: string
}

@observer
class TranslationsLayout extends React.Component<ITranslationInterface> {
    public render() {
        return (
            <main className={'l-translations ' + this.props.className}>
                {this.props.store.translationCategoryStore.translationCategories.map((category: ITranslationCategoryModel, id: number) => {
                    return <CategoryRow key={id} 
                                        category={category} 
                                        settingsStore={this.props.store.settingsStore}
                                        translationStore={this.props.store.translationStore} />
                })}
            </main>
        )
    }
}

export default TranslationsLayout;