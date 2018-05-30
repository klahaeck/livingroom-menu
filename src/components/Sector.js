import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Storage from './Storage';
import Socket from './Socket';

class Sector extends Component {
  constructor(props) {
    super(props);

    this.sectors = Storage.sectors;

    this.state = {
      sector: Storage.getSector()
    };

    this.handleSectorChange = this.handleSectorChange.bind(this);
  }

  handleSectorChange(event) {
    const sector = this.sectors.find(function(element) {
      return element.value === event.target.value;
    });
    Storage.setSector(sector);
    this.setState({sector});
    Socket.emit('room', `spotify-${sector.value}`);
  }

  render() {
    return (
      <div>
        <Input type="select" className="custom-select" name="selectvoice" id="selectvoice" value={this.state.sector.value} onChange={this.handleSectorChange}>{this.sectors.map((sector, i) => <option key={i} value={sector.value}>{sector.name}</option>)}</Input>
      </div>
    );
  }
}

export default Sector;
