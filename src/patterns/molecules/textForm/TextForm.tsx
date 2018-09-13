import * as React from 'react';
import Button from '../../atoms/button/Button';
import TextInput from '../../atoms/textInput/TextInput';
import './TextForm.scss';

interface ITextFormProps {
    inputLabel: string,
    buttonTextLabel: string,
    buttonA11yLabel: string,
    onButtonClick(): void,
    onTextChange(e: any): void
}

class TextForm extends React.Component<ITextFormProps> {
    public render() {
        return (
            <div className="m-text-form">
                <TextInput label={this.props.inputLabel} 
                           onTextChange={this.props.onTextChange} />
                           
                <Button a11yLabel={this.props.buttonA11yLabel} 
                        textLabel={this.props.buttonTextLabel}
                        onClick={this.props.onButtonClick}/>
            </div>
        )
    }

}

export default TextForm;