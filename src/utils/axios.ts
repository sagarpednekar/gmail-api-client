import axios from 'axios';
import { baseURL } from '../shared/constants';

export class Axios {
	constructor() {
		return axios.create({
			baseURL,
		});
	}
}
