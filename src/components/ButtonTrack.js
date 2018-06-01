import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Socket from './Socket';

const ButtonTrack = () => {
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
      <Button className="btn btn-outline-success btn-sm w-100" onClick={() => onClickHandler('prev')}>Prev Track</Button>
      <Button className="btn btn-success btn-sm w-100" onClick={() => onClickHandler('next')}>Next Track</Button>
    </ButtonGroup>
  );
};

export default ButtonTrack;
