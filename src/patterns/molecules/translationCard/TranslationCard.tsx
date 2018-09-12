import { observer } from 'mobx-react';
import * as React from 'react';
import ITranslationModel from '../../../models/Translation';
import SettingsStore from '../../../store/SettingsStore';
import './TranslationCard.scss';

interface ITranslationCardProps {
    translation: ITranslationModel,
    settingsStore: SettingsStore
}

@observer
class TranslationCard extends React.Component<ITranslationCardProps> {
    public render() {
        return (
            <div className="m-translation-card">
                <label>
                    {this.props.settingsStore.settings.native_lang}
                    <input type="text" defaultValue={this.props.translation.native_word} />
                </label>
                <label>
                    {this.props.settingsStore.settings.translated_lang}
                    <input type="text" defaultValue={this.props.translation.translated_word} />
                </label>
            </div>
        );
    }
}

export default TranslationCard;
