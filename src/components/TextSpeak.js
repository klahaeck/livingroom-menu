import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Socket from './Socket';

class TextSpeak extends Component {
  constructor(props) {
    super(props);

    this.voices = [
      'Agnes', 'Kathy', 'Princess', 'Vicki', 'Victoria',
      'Alex', 'Bruce', 'Fred', 'Junior', 'Ralph',
      'Albert', 'Bad News', 'Bahh', 'Bells', 'Boing', 'Bubbles', 'Cellos', 'Deranged', 'Good News', 'Hysterical', 'Pipe Organ', 'Trinoids', 'Whisper', 'Zarvox'
    ];

    this.state = {
      modal: false,
      voice: '',
      text: ''
    };
    this.toggle = this.toggle.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.speak = this.speak.bind(this);
    this.submit = this.submit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      text: ''
    });
  }

  handleVoiceChange(event) {
    this.setState({voice: event.target.value});
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  speak() {
    const data = {
      voice: this.state.voice,
      text: this.state.text
    };
    // fetch('https://socket.fallondev.com/spotify/speak', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data)
    // }).then(() => {
    //   this.toggle();
    // });
    Socket.emit('speak', data);
    // this.toggle();
  }

  submit(event) {
    event.preventDefault();
    this.speak();
  }

  render() {
    return (
      <div>
        <Button className="danger btn-sm btn-outline-danger w-100" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          {/* <ModalHeader toggle={this.toggle}>Speak Text</ModalHeader> */}
          <ModalBody>
            <Form onSubmit={this.submit}>
              <FormGroup>
                <Label for="selectvoice">Voice</Label>
                <Input type="select" className="custom-select" name="selectvoice" id="selectvoice" value={this.state.voice} onChange={this.handleVoiceChange}>
                  {this.voices.map((voice, i) => <option key={i}>{voice}</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="speaktext">Text</Label>
                <Input type="string" name="speaktext" id="speaktext" value={this.state.text} onChange={this.handleTextChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="btn-sm" color="primary" onClick={this.submit}>Speak</Button>{' '}
            <Button className="btn-sm" color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TextSpeak;
