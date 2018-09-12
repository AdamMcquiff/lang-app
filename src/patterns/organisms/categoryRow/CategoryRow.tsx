
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import ITranslationModel from '../../../models/Translation';
import TranslationStore from '../../../store/TranslationsStore';
import Button from '../../atoms/button/Button';
import TranslationCard from '../../molecules/translationCard/TranslationCard';
import './CategoryRow.scss';

interface ICategoryProps {
  categoryId: number,
  translationStore: TranslationStore
}

@observer
class CategoryRow extends React.Component<ICategoryProps> {
  constructor(props: ICategoryProps) {
    super(props);
  }

  @computed get filteredTranslations() {
    return this.props.translationStore.translations.filter(
      (translation: ITranslationModel) => translation.categoryId === this.props.categoryId
    )
  }

  public onClick() {
    return null;
  }

  public render() {
    return (
      <div className="m-category">
        {this.filteredTranslations.map((trans: ITranslationModel, id: number) => {
          return <TranslationCard translation={trans} key={id} />
        })}
        
        <Button a11yLabel="Add new translation"
                textLabel="Add new"
                onClick={this.onClick} />
      </div>
    );
  }
}

export default CategoryRow;
