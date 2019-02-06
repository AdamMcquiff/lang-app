import { observer } from 'mobx-react';
import * as React from 'react';
import ITranslationModel from '../../../models/Translation';
import SettingsStore from '../../../store/SettingsStore';
import TranslationStore from '../../../store/TranslationStore';
import Button from '../../atoms/button/Button';
import './TranslationCard.scss';

interface ITranslationCardProps {
    translation: ITranslationModel,
    settingsStore: SettingsStore
    translationStore: TranslationStore,
}

interface ITranslationCardState {
    native_word: string,
    translated_word: string
}

@observer
class TranslationCard extends React.Component<ITranslationCardProps, ITranslationCardState> {
    public state: ITranslationCardState = {
        native_word: this.props.translation.native_word,
        translated_word: this.props.translation.translated_word,
    }

    public onNativeTranslationFieldTextChange = (event: any) => {
        this.setState({ native_word: event.target.value }, () => this._updateTranslation());
    }

    public onTranslationFieldTextChange = (event: any) => {
        this.setState({ translated_word: event.target.value }, () => this._updateTranslation());
    }

    public onDeleteTranslationButtonClick = () => {
        this.props.translationStore.delete(this.props.translation);
    }
    
    public render() {
        return (
            <div className="m-translation-card">
                <Button a11yLabel={"Delete translation of " + this.props.translation.native_word}
                        textLabel="Delete"
                        onClick={this.onDeleteTranslationButtonClick} />

                <label className="m-translation-card__native-field-label" 
                       aria-label={`
                            Original (${this.props.settingsStore.settings.native_lang}) 
                            ${!this.state.native_word ? 'Please provide an original word' : ''}
                       `}>
                    {this.props.settingsStore.settings.native_lang}

                    <textarea className="m-translation-card__native-field-input"
                              placeholder={this.props.settingsStore.settings.native_lang + ' translation'}
                              onChange={this.onNativeTranslationFieldTextChange}
                              value={this.state.native_word} 
                    />
                </label>

                <hr />
                
                <label className="m-translation-card__translated-field-label"
                       aria-label={`
                            Translation (${this.props.settingsStore.settings.translated_lang}) 
                            ${!this.state.native_word ? 'Please provide a translation' : ''}
                       `}>
                    {this.props.settingsStore.settings.translated_lang}

                    <textarea className="m-translation-card__translated-field-input"
                              placeholder={this.props.settingsStore.settings.translated_lang + ' translation'}
                              onChange={this.onTranslationFieldTextChange}
                              value={this.state.translated_word}                               
                    />
                </label>
            </div>
        );
    }

    private _updateTranslation() {
        this.props.translationStore.update(
            Object.assign(this.props.translation, { 
                native_word: this.state.native_word,
                translated_word: this.state.translated_word 
            })
        );
    }
}

export default TranslationCard;
