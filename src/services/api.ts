import axios from 'axios';
import md5 from 'md5';

const publicKey = '61295220f13ac6f8bef26ba5c9e69bbf';
const privateKey = 'fa4c694ce9210bd865e2f121b402f5dd26fbb48c';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params:{
        ts,
        apikey: publicKey,
        hash,
    }
})

export default api;