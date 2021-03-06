import _ from 'lodash';
import {
  GET_ALL_STREAMS,
  GET_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_STREAMS:
      return action.payload;
    case GET_STREAM:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload._id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
