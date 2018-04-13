import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Socket from './Socket';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';

class PlayPause extends Component {
  onClickHandler() {
    // fetch('https://socket.fallondev.com/spotify/playpause', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    Socket.emit('playpause');
  }

  render() {
    return (
      <Button className="btn-primary btn-sm w-100" onClick={() => this.onClickHandler()}>Play/Pause</Button>
    );
  }
}

export default PlayPause;
