import axios, { AxiosResponse } from "axios";

const BACKEND_URL = "http://118.67.128.237";

const getMyRewards = (callbackFn: (rewards: object[]) => void) => {
    axios
		.get(`${BACKEND_URL}/apis/users/achieved-rewards`)
		.then((response: AxiosResponse<object[]>) => callbackFn(response.data))
		.catch((err) => {
			console.error(err);
		})
};

export default getMyRewards;