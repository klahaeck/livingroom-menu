import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { setSector } from '../store/actions/index';

const Sector = ({sectors, sector, setSector}) => (
  <div>
    <Input type="select" className="custom-select" name="selectvoice" id="selectvoice" value={sector.value} onChange={(event) => setSector(event.target.value)}>{sectors.map((s, i) => <option key={i} value={s.value}>{s.name}</option>)}</Input>
  </div>
);

export default connect(
  state => ({ sectors: state.sectors, sector: state.sector }),
  dispatch => ({ setSector: sector => dispatch(setSector(sector)) })
)(Sector);
