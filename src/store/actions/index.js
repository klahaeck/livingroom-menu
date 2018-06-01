import {
  SET_SECTOR,
  SET_STATUS,
  TOGGLE_MODAL,
  SET_VOICE,
  SET_TEXT
} from '../../constants/action-types';

export const setSector = sector => ({
  type: SET_SECTOR,
  payload: sector
});

export const setStatus = status => ({
  type: SET_STATUS,
  payload: status
});

export const toggleModal = state => ({
  type: TOGGLE_MODAL,
  payload: state
});

export const setVoice = voice => ({
  type: SET_VOICE,
  payload: voice
});

export const setText = text => ({
  type: SET_TEXT,
  payload: text
});

