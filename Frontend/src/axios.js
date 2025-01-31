import axios from 'axios';
import { baseUrl } from './components/costants/constants';

const instance=axios.create({
    baseURL:baseUrl,
})

export default instance;