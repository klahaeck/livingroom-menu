import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { setSector } from '../store/actions/index';

const mapStateToProps = state => {
  return {
    sectors: state.sectors,
    sector: state.sector
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSector: sector => dispatch(setSector(sector))
  };
};

const Sector = ({sectors, sector, setSector}) => {
  const handleSectorChange = (event) => {
    setSector(event.target.value);
  };

  return (
    <div>
      <Input type="select" className="custom-select" name="selectvoice" id="selectvoice" value={sector.value} onChange={handleSectorChange}>{sectors.map((s, i) => <option key={i} value={s.value}>{s.name}</option>)}</Input>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sector);
