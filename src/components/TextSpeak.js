import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Socket from './Socket';
import { toggleModal, setVoice, setText } from '../store/actions/index';

const speak = (event, props) => {
  event.preventDefault();
  const data = { voice: props.voice, text: props.text };
  Socket.emit('speak', data);
};

const toggle = (props) => {
  props.toggleModal(!props.modal);
  props.setText('');
};

const TextSpeak = (props) => (
  <div>
    <Button className="danger btn-sm btn-outline-danger w-100" onClick={() => toggle(props)}>{props.buttonLabel}</Button>
    <Modal isOpen={props.modal} toggle={toggle} className={props.className}>
      <ModalBody>
        <Form onSubmit={(event) => speak(event, props)}>
          <FormGroup>
            <Label for="selectvoice">Voice</Label>
            <Input type="select" className="custom-select" name="selectvoice" id="selectvoice" value={props.voice} onChange={(event) => this.props.setText(event.target.value)}>
              {props.voices.map((voice, i) => <option key={i}>{voice}</option>)}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="speaktext">Text</Label>
            <Input type="string" name="speaktext" id="speaktext" value={props.text} onChange={(event) => props.setText(event.target.value)} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button className="btn-sm" color="primary" onClick={(event) => speak(event, props)}>Speak</Button>{' '}
        <Button className="btn-sm" color="secondary" onClick={() => toggle(props)}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default connect(
  state => ({
    voices: state.voices,
    voice: state.voice,
    modal: state.modal,
    text: state.text
  }),
  dispatch => ({
    toggleModal: state => dispatch(toggleModal(state)),
    setVoice: voice => dispatch(setVoice(voice)),
    setText: text => dispatch(setText(text))
  })
)(TextSpeak);
