import axios from 'axios';

export const get = (url, data, options) => {
	return sendRequest("GET", url, null, options);
}

export const post = (url, data, options) => {
	return sendRequest("POST", url, data, options);
}

const sendRequest = (method, url, data) => {
	var options = {
        method: method,
        headers: {
			'content-type': 'application/json'
		},
		mode: 'cors'
	}
	if (data) options.data = data;
	return axios(url, options);
}