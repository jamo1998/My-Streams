import * as streams from '../apis';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  GET_ALL_STREAMS,
  GET_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    try {
      const { userId } = getState().auth;
      const response = await streams.createStream({
        ...formValues,
        userId,
      });

      dispatch({ type: CREATE_STREAM, payload: response.data });
      // Returns user back to home back to home page once a stream
      // is successfully created
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllStreams = () => {
  return async (dispatch) => {
    try {
      const response = await streams.getStreams();

      dispatch({ type: GET_ALL_STREAMS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getStream = (id) => {
  return async (dispatch) => {
    try {
      const response = await streams.getStream(id);

      dispatch({ type: GET_STREAM, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateStream = (id, formValues) => {
  return async (dispatch) => {
    try {
      const response = await streams.updateStream(id, formValues);

      dispatch({ type: UPDATE_STREAM, payload: response.data });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    try {
      await streams.deleteStream(id);

      dispatch({ type: DELETE_STREAM, payload: id });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};
