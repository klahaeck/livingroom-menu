import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Socket from './Socket';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: {},
      title: 'loading status...'
    };

    Socket.on('status', data => {
      const title = `${data.artist} - ${data.track}`;
      this.setState({status: data, title});
    });

    Socket.emit('getinfo');

    setInterval(() => {
      Socket.emit('getinfo');
    }, 10000);
    Socket.emit('getinfo');
  }

  // getData() {
  //   fetch('https://socket.fallondev.com/spotify/getinfo', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   });
  // }

  render() {
    return (
      <Card>
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{this.state.title}</CardTitle>
          <CardSubtitle>{this.state.status.album}</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
        </CardBody>
      </Card>
    );
  }
}

export default Status;
