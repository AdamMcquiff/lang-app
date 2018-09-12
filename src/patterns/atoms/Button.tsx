import * as React from 'react';
import './Button.scss';

interface IButtonProps {
    a11yLabel: string,
    textLabel: string,
    onClick(): void
}

class Button extends React.Component<IButtonProps> {
    public static defaultProps = {
        a11yLabel: 'Click me.',
        textLabel: 'Click me.'
    }

    public render() {
        return (
            <button className="button" 
                    aria-label={this.props.a11yLabel}
                    onClick={this.props.onClick}>
                {this.props.textLabel}
            </button>
        )
    }
}

export default Button;