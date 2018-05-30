import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Status from './components/Status';
import PlayPause from './components/PlayPause';
import ButtonTrack from './components/ButtonTrack';
import VolumeControl from './components/VolumeControl';
import TextSpeak from './components/TextSpeak';
import Sector from './components/Sector';

import './neon-glow/css/bootstrap4-neon-glow.min.css';
import './App.css';

class App extends Component {
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
          <Row>
            <Col>
              <Sector />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
