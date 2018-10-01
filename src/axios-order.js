import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-5c724.firebaseio.com/'
})

export default instance;