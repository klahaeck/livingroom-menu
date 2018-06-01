import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Socket from './Socket';

const onClickHandler = (state) => {
  Socket.emit(state);
};

const ButtonTrack = () => (
  <ButtonGroup className="btn-group d-flex">
    <Button className="btn btn-outline-success btn-sm w-100" onClick={() => onClickHandler('prev')}>Prev Track</Button>
    <Button className="btn btn-success btn-sm w-100" onClick={() => onClickHandler('next')}>Next Track</Button>
  </ButtonGroup>
);

export default ButtonTrack;
