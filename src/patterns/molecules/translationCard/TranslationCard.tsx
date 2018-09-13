import { observer } from 'mobx-react';
import * as React from 'react';
import ITranslationModel from '../../../models/Translation';
import SettingsStore from '../../../store/SettingsStore';
import TranslationStore from '../../../store/TranslationsStore';
import './TranslationCard.scss';

interface ITranslationCardProps {
    translation: ITranslationModel,
    settingsStore: SettingsStore
    translationStore: TranslationStore,
}

@observer
class TranslationCard extends React.Component<ITranslationCardProps> {
    constructor(props: ITranslationCardProps) {
        super(props);
        this.onNativeTranslationFieldTextChange = this.onNativeTranslationFieldTextChange.bind(this);
        this.onTranslationFieldTextChange = this.onTranslationFieldTextChange.bind(this);
    }

    public onNativeTranslationFieldTextChange(event: any) {
        this._updateTranslation(
            Object.assign(this.props.translation, { native_word: event.target.value })
        );
    }

    public onTranslationFieldTextChange(event: any) {
        this._updateTranslation(
            Object.assign(this.props.translation, { translated_word: event.target.value })
        );
    }
    
    public render() {
        return (
            <div className="m-translation-card">
                <label>
                    {this.props.settingsStore.settings.native_lang}
                    <input type="text" 
                           defaultValue={this.props.translation.native_word}
                           onChange={this.onNativeTranslationFieldTextChange} />
                </label>
                <label>
                    {this.props.settingsStore.settings.translated_lang}
                    <input type="text" 
                           defaultValue={this.props.translation.translated_word}
                           onChange={this.onTranslationFieldTextChange} />
                </label>
            </div>
        );
    }

    private _updateTranslation(translation: ITranslationModel) {
        this.props.translationStore.updateTranslation(translation);
    }
}

export default TranslationCard;
