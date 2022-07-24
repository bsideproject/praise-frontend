import axios from "axios";

const BACKEND_URL = "http://118.67.128.237";

const checkNewRewords = () => 
	axios
		.get(`${BACKEND_URL}/apis/achieved-rewards/new`)
		.then(response => response.data)
		.catch((err) => {
			if(!err?.response?.data) return;
			const { error } = err.response.data;
			alert(error.message)
		})

export default checkNewRewords;