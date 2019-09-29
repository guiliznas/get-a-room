import axios from 'axios';

/**
 * Create axios instance, setting configs, like headers, endpoint, etc..
 */

const client = axios.create({
  baseURL: 'http://localhost:3333'
});

export default client
