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
        onClick: () => null,
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
                      aria-hidden={true}>
                    {this.props.textLabel}
                </span>

                <input className="a-text-input__field"
                       onChange={this.props.onTextChange}
                       type="text" />
            </label>
        )
    }
}

export default TextInput;