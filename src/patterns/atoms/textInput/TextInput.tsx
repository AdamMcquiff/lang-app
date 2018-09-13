import * as React from 'react';
import './TextInput.scss';

interface ITextInputProps {
    textLabel: string,
    a11yLabel: string,
    onTextChange?: (e: any) => void
}

class TextInput extends React.Component<ITextInputProps> {
    public static defaultProps = {
        a11yLabel: 'Give me a label',
        textLabel: 'Give me a label',
    }

    public render() {
        return (
            <label className="a-text-input">
                <span hidden={true}>{this.props.a11yLabel}</span>
                <span aria-hidden={true}>{this.props.textLabel}</span>
                <input type="text" onChange={this.props.onTextChange} />
            </label>
        )
    }
}

export default TextInput;