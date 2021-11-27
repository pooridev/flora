import Axios from 'axios';
import {Configs} from '../configs';
import {db} from './db';
import {requestRefresh} from "../queries/auth";
import {CustomAlert} from "./alert";
import {FullDateTime, HumanDateTime} from "./datetime";
import {ParseJWT} from "./auth";
import { AxiosInstance } from 'api/axios.instance';
if(!Configs.IS_PRODUCTION && db.get('tokens') && db.get('tokens')['access_token']) {
	console.log('%c Token expired: ' + HumanDateTime(ParseJWT(db.get('tokens')['access_token'])['exp'] * 1000) + ` (${FullDateTime(ParseJWT(db.get('tokens')['access_token'])['exp'] * 1000)})`, 'color: deeppink');
}


export const query = ({uri, auth = true,...other}) => new Promise((resolve, reject) => {
	let PAYLOAD = {
		url: Configs.API_URL + uri,
		headers: {},
		...other
	};
	console.log({PAYLOAD});
	if(!auth) delete PAYLOAD['headers']['Authorization']
	else PAYLOAD['headers']['Authorization'] = 'Bearer ' + db.get('tokens')['access_token'];
	// @ts-ignore
	AxiosInstance(PAYLOAD).then(response => {
		resolve({
			HTTP_STATUS_CODE: response?.status,
			...response?.data
		})
	}).catch(error => {
			return reject(error?.response);
	})
})
