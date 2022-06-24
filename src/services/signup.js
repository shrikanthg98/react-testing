import axios from 'axios';

const createUser = (payload) => axios.post('/create-user', payload);

export default {
  createUser,
};