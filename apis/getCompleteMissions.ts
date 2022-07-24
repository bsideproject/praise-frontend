import axios, { AxiosResponse } from "axios";

const BACKEND_URL = "http://118.67.128.237";

const getCompleteMissions = async (callbackFn: (rewards: object[]) => void) => 
    axios
		.get(`${BACKEND_URL}/apis/users/completed-missions`)
		.then((response) => callbackFn(response.data))
		.catch((err) => {
			console.error(err);
		})
;

export default getCompleteMissions;