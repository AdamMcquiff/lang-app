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
    constructor(props: ICategoryProps) {
        super(props);
    }

    @computed get filteredTranslations() {
        return this.props.translationStore.translations.filter(
            (translation: ITranslationModel) => translation.categoryId === this.props.category.id
        )
    }

    public onAddButtonClick() {
        return true;
    }

    public render() {
        return (
            <div className="m-category">
                <h2>{this.props.category.title}</h2>

                {this.filteredTranslations.map((trans: ITranslationModel, id: number) => {
                    return <TranslationCard key={id}
                                            translation={trans}
                                            settingsStore={this.props.settingsStore} />
                })}
        
                <Button a11yLabel="Add new translation"
                        textLabel="Add new"
                        onClick={this.onAddButtonClick} />
            </div>
        );
    }
}

export default CategoryRow;
