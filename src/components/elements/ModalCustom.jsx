import React, { Component } from 'react';
import propsTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        backgroundColor: '#2125295c',
    },
    content: {
        border: 'none',
        padding: '0',
    }
};

class ModalCustom extends Component {
    static props = {
        title: propsTypes.string.isRequired,
        actionButtons: propsTypes.array,
        setSkipModal: propsTypes.func,
    }

    static defaultProps = {
        title: '',
        actionButtons: [],
        setSkipModal: () => {},
    }

    state = {
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    handleChange = (event) => {
        this.props.setSkipModal(event.target.value);
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));

        return (
            <Modal isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                className='modal-dialog'
                contentLabel="CustomerModal">
                <div className="modal-content">
                    <div className="block block-themed block-transparent remove-margin-b">
                        <div className="block-header bg-primary-dark">
                            <ul className="block-options">
                                <li>
                                    <button data-dismiss="modal" type="button" onClick={this.closeModal}><i className="si si-close"></i></button>
                                </li>
                            </ul>
                            <h3 className="block-title">{this.props.title}</h3>
                        </div>
                        <div className="block-content">
                            {childrenWithProps}
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* {   this.props.setSkipModal &&
                            <label className="css-input switch switch-sm switch-success" style={{width: '100%'}}>
                                <input type="checkbox" id="register1-terms" name="register1-terms" onChange={this.handleChange}/><span></span> Don't show this modal again!
                            </label>
                        } */}
                        {
                            this.props.actionButtons.map((item, key) =>
                                <button key={key} className={`btn btn-sm ${item.className}`} type="button" onClick={item.action}>{item.text}</button>
                            )
                        }
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ModalCustom;
