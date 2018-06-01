import React from 'react';
import { Button } from 'reactstrap';
import Socket from './Socket';

const onClickHandler = () => {
  Socket.emit('playpause');
};

const PlayPause = () => (
  <Button className="btn-primary btn-sm w-100" onClick={() => onClickHandler()}>Play/Pause</Button>
);

export default PlayPause;
