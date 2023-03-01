import axios from 'axios';
export const withAxios = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: 'http://localhost:9000//api',
	});
};
