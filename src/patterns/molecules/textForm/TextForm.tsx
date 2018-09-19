import * as React from 'react';
import Button from '../../atoms/button/Button';
import TextInput from '../../atoms/textInput/TextInput';
import './TextForm.scss';

interface ITextFormProps {
    inputLabel: string,
    buttonTextLabel: string,
    buttonA11yLabel: string,
    hasButton: boolean,
    onSubmit(): void,
    onTextChange(e: any): void,
}

class TextForm extends React.Component<ITextFormProps> {
    public static defaultProps = {
        buttonA11yLabel: 'Label me.',
        buttonTextLabel: 'Label me.',
        hasButton: true,
        onSubmit: () => null,
        onTextChange: () => null,
    }
    
    public render() {
        return (
            <div className="m-text-form">
                <form onKeyDown={this.onSubmit}>
                    <TextInput textLabel={this.props.inputLabel}
                               a11yLabel={this.props.inputLabel} 
                               onTextChange={this.props.onTextChange} />
                            
                    {this.props.hasButton &&
                        <Button a11yLabel={this.props.buttonA11yLabel} 
                                textLabel={this.props.buttonTextLabel}
                                onClick={this.props.onSubmit} />
                    }   
                </form>
            </div>
        )
    }

    private onSubmit = (e: any) => {
        if (e.key !== 'Enter') {
            return;
        }

        e.preventDefault();
        this.props.onSubmit();
    }
}

export default TextForm;