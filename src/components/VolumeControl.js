import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Socket from './Socket';

const VolumeControl = () => {
  const onClickHandler = (state) => {
    // fetch(`https://socket.fallondev.com/spotify/${state}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    Socket.emit(state);
  };

  return (
    <ButtonGroup className="btn-group d-flex">
      <Button className="btn btn-outline-primary btn-sm w-100" onClick={() => onClickHandler('volumedown')}>Volume Down</Button>
      <Button className="btn btn-outline-secondary btn-sm w-100" onClick={() => onClickHandler('volumeup')}>Volume Up</Button>
    </ButtonGroup>
  );
};

export default VolumeControl;
