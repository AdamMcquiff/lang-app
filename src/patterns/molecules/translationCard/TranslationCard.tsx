import { observer } from 'mobx-react';
import * as React from 'react';
import ITranslationModel from '../../../models/Translation';
import './TranslationCard.scss';

interface ITranslationCardProps {
    translation: ITranslationModel,
}

@observer
class TranslationCard extends React.Component<ITranslationCardProps> {
    public render() {
        return (
            <div className="m-translation-card">
                {this.props.translation.native_word}
                {this.props.translation.translated_word}
            </div>
        );
    }
}

export default TranslationCard;
