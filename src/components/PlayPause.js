import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Socket from './Socket';

const onClickHandler = () => {
  Socket.emit('playpause');
};

const getLabel = (status) => {
  return status ? 'Pause' : 'Play';
};

const PlayPause = ({status}) => (
  <Button className="btn-primary btn-sm w-100" onClick={() => onClickHandler()}>{getLabel(status.playing)}</Button>
);

export default connect(
  state => ({ status: state.status })
)(PlayPause);
