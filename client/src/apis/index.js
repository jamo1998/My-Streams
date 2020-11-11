import axios from 'axios';

const url = 'http://localhost:5000/streams';

export const getStreams = () => axios.get(url);
export const getStream = (id) => axios.get(`${url}/${id}`);
export const createStream = (newStream) => axios.post(url, newStream);
export const updateStream = (id, updatedStream) =>
  axios.patch(`${url}/${id}`, updatedStream);
export const deleteStream = (id) => axios.delete(`${url}/${id}`);

// import axios from 'axios';

// export default axios.create({
//   baseURL: 'http://localhost:3001',
// });
