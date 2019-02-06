import { computed } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import ITranslationModel from '../../../models/Translation';
import ITranslationCategoryModel from '../../../models/TranslationCategory';
import SettingsStore from '../../../store/SettingsStore';
import TranslationStore from '../../../store/TranslationStore';
import Button from '../../atoms/button/Button';
import TranslationCard from '../../molecules/translationCard/TranslationCard';
import './CategoryRow.scss';

interface ICategoryProps {
    category: ITranslationCategoryModel,
    translationStore: TranslationStore,
    settingsStore: SettingsStore
}

@observer
class CategoryRow extends React.Component<ICategoryProps> {
    @computed get filteredTranslations(): ITranslationModel[] {
        return this.props.translationStore.translations.filter(
            (translation: ITranslationModel) => translation.categoryId === this.props.category.id
        )
    }

    @computed get totalNumberOfTranslations(): number {
        return this.filteredTranslations.length;
    }

    @computed get numberOfTranslationsLabel(): string {
        const isMultipleTranslations = this.totalNumberOfTranslations !== 1;
        let translationLabel = 'translation';

        if (isMultipleTranslations) {
            translationLabel = 'translations';
        }

        return `${this.totalNumberOfTranslations} ${translationLabel}`;
    }

    public onAddTranslationButtonClick = () => {
        this.props.translationStore.create({
            categoryId: this.props.category.id, 
            native_word: '',
            translated_word: ''
        })
    }

    public render() {
        return (
            <section className="m-category-row">
                <header>
                    <h2>
                        {this.props.category.title}
                    </h2>
                    <p>
                        {this.numberOfTranslationsLabel}
                    </p>
                </header>

                <div>
                    {this.filteredTranslations.map((trans: ITranslationModel, id: number) => 
                        <TranslationCard 
                            key={id}
                            translation={trans}
                            translationStore={this.props.translationStore}
                            settingsStore={this.props.settingsStore} 
                        />
                    )}
            
                    <Button className="m-category-row__add-button"
                            a11yLabel="Add new translation"
                            textLabel="Add new"
                            onClick={this.onAddTranslationButtonClick}         
                    />
                </div>
            </section>
        );
    }
}

export default CategoryRow;
