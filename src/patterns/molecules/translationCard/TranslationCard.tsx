import { observer } from 'mobx-react';
import * as React from 'react';
import './TranslationCard.scss';

interface ITranslationCard {
  translation: any,
}

@observer
class TranslationCard extends React.Component<ITranslationCard> {
  public render() {
    return (
      <div>
        {this.props.translation.native_word}
        {this.props.translation.translated_word}
      </div>
    );
  }
}

export default TranslationCard;
