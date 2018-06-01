import store from './store';

const room = `spotify-${store.getState().sector.value}`;

export default {
  socketURL: 'http://localhost:9095',
  room
};