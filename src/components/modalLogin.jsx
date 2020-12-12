import { React, Component } from "react";
import Modal from "react-modal";

class ModalLogin extends Component {
  state = {};
  render() {
    return (
      <Modal isOpen={true}>
        <h1>Hello</h1>
        <p>Modal Body</p>
      </Modal>
    );
  }
}

export default ModalLogin;
