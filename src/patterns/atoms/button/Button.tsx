import * as React from 'react';
import './Button.scss';

interface IButtonProps {
    a11yLabel: string,
    className: string,
    textLabel: string,
    onClick(): void
}

class Button extends React.Component<IButtonProps> {
    public static defaultProps = {
        a11yLabel: 'Click me',
        className: '',
        onClick: () => null,
        textLabel: 'Click me',
    }

    public render() {
        return (
            <button className={'a-button ' + this.props.className}
                    aria-label={this.props.a11yLabel}
                    onClick={this.props.onClick}>
                {this.props.textLabel}
            </button>
        )
    }
}

export default Button;