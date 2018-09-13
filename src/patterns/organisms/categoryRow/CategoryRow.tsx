import { computed } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import ICategoryModel from '../../../models/Category';
import ITranslationModel from '../../../models/Translation';
import SettingsStore from '../../../store/SettingsStore';
import TranslationStore from '../../../store/TranslationsStore';
import Button from '../../atoms/button/Button';
import TranslationCard from '../../molecules/translationCard/TranslationCard';
import './CategoryRow.scss';

interface ICategoryProps {
    category: ICategoryModel,
    translationStore: TranslationStore,
    settingsStore: SettingsStore
}

@observer
class CategoryRow extends React.Component<ICategoryProps> {
    
    @computed get filteredTranslations() {
        return this.props.translationStore.translations.filter(
            (translation: ITranslationModel) => translation.categoryId === this.props.category.id
            )
        }
        
    constructor(props: ICategoryProps) {
        super(props);
        this.onAddTranslationButtonClick = this.onAddTranslationButtonClick.bind(this);
    }

    public onAddTranslationButtonClick() {
        return this.props.translationStore.createTranslation({
            categoryId: this.props.category.id, 
            native_word: '',
            translated_word: ''
        })
    }

    public render() {
        return (
            <div className="m-category-row">
                <h2>{this.props.category.title}</h2>

                {this.filteredTranslations.map((trans: ITranslationModel, id: number) => {
                    return <TranslationCard key={id}
                                            translation={trans}
                                            translationStore={this.props.translationStore}
                                            settingsStore={this.props.settingsStore} />
                })}
        
                <Button a11yLabel="Add new translation"
                        textLabel="Add new"
                        onClick={this.onAddTranslationButtonClick} />
            </div>
        );
    }
}

export default CategoryRow;
