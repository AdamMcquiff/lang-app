
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import './Category.scss';
import TranslationStore from './store/TranslationsStore';
import TranslationCard from './TranslationCard';

interface ICategoryProps {
  categoryId: number,
  translationStore: TranslationStore
}

@observer
class Category extends React.Component<ICategoryProps> {
  constructor(props: ICategoryProps) {
    super(props);
  }

  @computed get filteredTranslations() {
    return this.props.translationStore.translations.filter(
      (translation: any) => translation.categoryId === this.props.categoryId
    )
  }

  public render() {
    return (
      <div className="m-category">
        {this.filteredTranslations.map((trans, id) => {
          return <TranslationCard translation={trans} key={id} />
        })}
        <button>Add new...</button>
      </div>
    );
  }
}

export default Category;
