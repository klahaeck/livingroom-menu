import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Socket from './Socket';
import { toggleModal, setVoice, setText } from '../store/actions/index';

const mapStateToProps = state => {
  return {
    voices: state.voices,
    voice: state.voice,
    modal: state.modal,
    text: state.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: state => dispatch(toggleModal(state)),
    setVoice: voice => dispatch(setVoice(voice)),
    setText: text => dispatch(setText(text))
  };
};

const TextSpeak = (props) => {
  const toggle = () => {
    props.toggleModal(!props.modal);
    props.setText('');
  };

  const handleVoiceChange = (event) => {
    props.setVoice(event.target.value);
  };

  const handleTextChange = (event) => {
    props.setText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    const data = {
      voice: props.voice,
      text: props.text
    };
    Socket.emit('speak', data);
  };

  return (
    <div>
      <Button className="danger btn-sm btn-outline-danger w-100" onClick={toggle}>{props.buttonLabel}</Button>
      <Modal isOpen={props.modal} toggle={toggle} className={props.className}>
        {/* <ModalHeader toggle={this.toggle}>Speak Text</ModalHeader> */}
        <ModalBody>
          <Form onSubmit={submit}>
            <FormGroup>
              <Label for="selectvoice">Voice</Label>
              <Input type="select" className="custom-select" name="selectvoice" id="selectvoice" value={props.voice} onChange={handleVoiceChange}>
                {props.voices.map((voice, i) => <option key={i}>{voice}</option>)}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="speaktext">Text</Label>
              <Input type="string" name="speaktext" id="speaktext" value={props.text} onChange={handleTextChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-sm" color="primary" onClick={submit}>Speak</Button>{' '}
          <Button className="btn-sm" color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TextSpeak);
