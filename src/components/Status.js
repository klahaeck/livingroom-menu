import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { setStatus } from '../store/actions/index';
import Socket from './Socket';

class Status extends Component {
  constructor(props) {
    super(props);

    Socket.on('status', data => {
      this.props.setStatus(data);
    });
    
    Socket.emit('getinfo');
    
    setInterval(() => {
      Socket.emit('getinfo');
    }, 10000);
  }

  getTitle() {
    return !this.props.status.artist || !this.props.status.track ? 'Loading...' : `${this.props.status.artist} - ${this.props.status.track}`;
  }

  render() {
    return (
      <Card>
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{this.getTitle()}</CardTitle>
          <CardSubtitle>{this.props.status.album}</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
        </CardBody>
      </Card>
    );
  }
}

export default connect(
  state => ({ status: state.status }),
  dispatch => ({ setStatus: status => dispatch(setStatus(status)) })
)(Status);
