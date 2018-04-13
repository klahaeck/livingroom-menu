import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Status from './components/Status';
import PlayPause from './components/PlayPause';
import ButtonTrack from './components/ButtonTrack';
import VolumeControl from './components/VolumeControl';
import TextSpeak from './components/TextSpeak';

import './neon-glow/css/bootstrap4-neon-glow.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updates: false
    };

    window.ipcRenderer.on('updateReady', function(event, text) {
      this.setState({updates: true});
    });
  }

  renderUpdateMessage(){
    if (this.state.updates) {
      return (
        <Row>
          <Col>
            <Button className="btn-sm btn-primary w-100" onClick={() => window.ipcRenderer.send('quitAndInstall')}>Click To Update</Button>
          </Col>
        </Row>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Status />
        <Container>
          <Row>
            <Col>
              <PlayPause />
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonTrack />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <VolumeControl />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextSpeak buttonLabel="Speak Text" />
            </Col>
          </Row>
          { this.renderUpdateMessage() }
        </Container>
      </div>
    );
  }
}

export default App;
