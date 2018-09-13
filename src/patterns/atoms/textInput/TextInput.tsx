import * as React from 'react';
import './TextInput.scss';

interface ITextInputProps {
    label: string,
    onTextChange(e: any): void
}

class TextInput extends React.Component<ITextInputProps> {
    public static defaultProps = {
        label: 'Give me a label'
    }

    public render() {
        return (
            <label className="a-text-input">
                {this.props.label}
                <input type="text" onChange={this.props.onTextChange} />
            </label>
        )
    }
}

export default TextInput;