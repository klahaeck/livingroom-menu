import Socket from '../../components/Socket';
import {
  SET_SECTOR,
  // SET_STATUS,
  TOGGLE_MODAL,
  SET_VOICE,
  SET_TEXT
} from '../../constants/action-types';

const sectors = [
  { name: 'BoomBox', value: 'boombox' },
  { name: 'Living Room', value: 'livingroom' }
];

const voices = [
  'Agnes', 'Kathy', 'Princess', 'Vicki', 'Victoria', 'Alex', 'Bruce', 'Fred', 'Junior', 'Ralph', 'Albert', 'Bad News', 'Bahh', 'Bells', 'Boing', 'Bubbles', 'Cellos', 'Deranged', 'Good News', 'Hysterical', 'Pipe Organ', 'Trinoids', 'Whisper', 'Zarvox'
];

const findSector = (sector) => {
  const foundSector = initialState.sectors.find(function(element) {
    return element.value === sector;
  });
  return foundSector;
}

const initialState = {
  sectors,
  sector: JSON.parse(localStorage.getItem('sector')) || sectors[0],
  // status: {},
  modal: false,
  voices,
  voice: '',
  text: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_SECTOR:
    Socket.emit('room', `spotify-${findSector(action.payload).value}`);
    localStorage.setItem('sector', JSON.stringify(findSector(action.payload)));
    return { ...state, sector: findSector(action.payload) };
  // case SET_STATUS:
  //   return { ...state, status: action.payload };
  case TOGGLE_MODAL:
    return { ...state, modal: action.payload };
  case SET_VOICE:
    return { ...state, voice: action.payload };
  case SET_TEXT:
    return { ...state, text: action.payload };
  default:
    return state;
  }
};

export default rootReducer;
