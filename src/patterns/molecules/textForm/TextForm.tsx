import * as React from 'react';
import Button from '../../atoms/button/Button';
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
                <label>
                    {this.props.inputLabel}
                    <input type="text" onChange={this.props.onTextChange} />
                </label>
                <Button a11yLabel={this.props.buttonA11yLabel} 
                        textLabel={this.props.buttonTextLabel}
                        onClick={this.props.onButtonClick}/>
            </div>
        )
    }

}

export default TextForm;