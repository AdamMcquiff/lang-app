import * as React from 'react';
import './TextInput.scss';

interface ITextInputProps {
    a11yLabel: string,
    textLabel: string,
    placeholder: string,
    hasBackground: boolean,
    hasLabel: boolean,
    onTextChange?: (e: any) => void
}

export class TextInput extends React.Component<ITextInputProps> {
    public static defaultProps = {
        a11yLabel: 'Give me a label',
        hasBackground: true,
        hasLabel: true,
        onClick: () => null,
        placeholder: '',
        textLabel: 'Give me a label',
    }

    public render() {
        return (
            <label className="a-text-input">
                <span className="a-text-input__a11y-label"
                      hidden={true}>
                    {this.props.a11yLabel}
                </span>
                
                <span className="a-text-input__text-label"
                      aria-hidden={true}
                      hidden={!this.props.hasLabel}>
                    {this.props.textLabel}
                </span>

                <input className={`a-text-input__field ${(!this.props.hasBackground ? 'a-text-input__field--transparent' : '')}`}
                       onChange={this.props.onTextChange}
                       placeholder={this.props.placeholder}
                       type="text" 
                />
            </label>
        )
    }
}