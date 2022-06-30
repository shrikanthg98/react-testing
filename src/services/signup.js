import axios from 'axios';

const createUser = (payload) => axios.post('/signup/create-user', payload);

const getUsers = () => axios.post('/get-users');

export default {
  createUser,
  getUsers,
};