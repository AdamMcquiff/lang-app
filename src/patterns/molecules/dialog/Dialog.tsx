import * as React from 'react';
import { Button } from 'src/patterns/atoms/button/Button';
import './Dialog.scss';

interface IDialogProps {
    id: string,
    title?: string,
    body?: string,
    isOpen?: boolean,
    onDialogConfirm?: () => void,
    onDialogCancel?: () => void,
}

interface IDialogState {
    isOpen: boolean; 
}

export class Dialog extends React.Component<IDialogProps, IDialogState> {
    public state: IDialogState = {
        isOpen: false
    };

    public toggleDialog = (isOpen: boolean) => {
        // Get native dialog HTML element and trigger modal.
        const dialog: HTMLDialogElement = document.getElementById(this.props.id) as HTMLDialogElement;

        if (dialog) {
            isOpen 
                ? dialog.showModal() 
                : dialog.close();
        }
    }

    public handleOnDialogCancel = () => {
        this.toggleDialog(false);

        this.props.onDialogCancel && this.props.onDialogCancel();
    }

    public handleOnDialogConfirm = () => {
        this.toggleDialog(false);

        this.props.onDialogConfirm && this.props.onDialogConfirm();
    }

    public render() {
        if (this.props.isOpen && !this.state.isOpen) {
            this.toggleDialog(true);
        }

        return (
            <dialog 
                id={this.props.id} 
                open={this.props.isOpen}
                className="m-dialog" 
            >
                <header className="m-dialog__header">
                    <h1>
                        {this.props.title}
                    </h1>
                </header>

                <section className="m-dialog__body">
                    <p>
                        {this.props.body}
                    </p>
                </section>

                <menu className="m-dialog__actions">
                    <Button
                        className="m-dialog__button"
                        textLabel="No"
                        a11yLabel="Do not delete category"
                        onClick={this.handleOnDialogCancel}
                    />

                    <Button
                        className="m-dialog__button m-dialog__button--confirm"
                        textLabel="Yes"
                        a11yLabel="Delete category"
                        onClick={this.handleOnDialogConfirm}
                    />
                </menu>
            </dialog>
        )
    }
}