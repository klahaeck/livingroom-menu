import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Socket from './Socket';

class ButtonTrack extends Component {
  onClickHandler(state) {
    // fetch(`https://socket.fallondev.com/spotify/${state}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    Socket.emit(state);
  }

  render() {
    return (
      <ButtonGroup className="btn-group d-flex">
        <Button className="btn btn-outline-success btn-sm w-100" onClick={() => this.onClickHandler('prev')}>Prev Track</Button>
        <Button className="btn btn-success btn-sm w-100" onClick={() => this.onClickHandler('next')}>Next Track</Button>
      </ButtonGroup>
    );
  }
}

export default ButtonTrack;
