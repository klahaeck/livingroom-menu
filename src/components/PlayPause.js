import React from 'react';
import { Button } from 'reactstrap';
import Socket from './Socket';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';

const PlayPause = () => {
  const onClickHandler = () => {
    // fetch('https://socket.fallondev.com/spotify/playpause', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    Socket.emit('playpause');
  };

  return (
    <Button className="btn-primary btn-sm w-100" onClick={() => onClickHandler()}>Play/Pause</Button>
  );
};

export default PlayPause;
