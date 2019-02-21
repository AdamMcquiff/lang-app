import * as React from 'react';
import { Button } from '../../atoms/button/Button';
import { TextInput } from '../../atoms/textInput/TextInput';
import './TextForm.scss';

interface ITextFormProps {
    inputLabel: string,
    buttonTextLabel: string,
    buttonA11yLabel: string,
    placeholder: string,
    hasBackground: boolean,
    hasButton: boolean,
    hasLabel: boolean,
    onSubmit(): void,
    onTextChange(e: any): void,
}

export class TextForm extends React.Component<ITextFormProps> {
    public static defaultProps = {
        buttonA11yLabel: 'Label me.',
        buttonTextLabel: 'Label me.',
        hasBackground: true,
        hasButton: true,
        hasLabel: true,
        onSubmit: () => null,
        onTextChange: () => null,
        placeholder: '',
    }
    
    public render() {
        return (
            <div className="m-text-form">
                <form onKeyDown={this.onSubmit}>
                    <TextInput textLabel={this.props.inputLabel}
                               a11yLabel={this.props.inputLabel} 
                               placeholder={this.props.placeholder}
                               hasLabel={this.props.hasLabel}
                               hasBackground={this.props.hasBackground}
                               onTextChange={this.props.onTextChange} 
                    />
                            
                    {this.props.hasButton &&
                        <Button a11yLabel={this.props.buttonA11yLabel} 
                                textLabel={this.props.buttonTextLabel}
                                onClick={this.props.onSubmit} 
                        />
                    }   
                </form>
            </div>
        )
    }

    private onSubmit = (event: any) => {
        if (event.key !== 'Enter') {
            return;
        }
    
        event.preventDefault();
        this.props.onSubmit();
        event.target.value = "";
    }
}