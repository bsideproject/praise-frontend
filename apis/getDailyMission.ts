import axios from "axios";

const BACKEND_URL = "http://118.67.128.237";

const getDailyMission = (callbackFn: (mission: object) => void) => {
    axios
		.get(`${BACKEND_URL}/apis/daily-mission-progress`)
		.then((response) => callbackFn(response.data))
		.catch((err) => {
			const { error } = err.response.data;
			if(error.code === "E3000") {
				axios
				.post(`${BACKEND_URL}/apis/mission-progress`)
				.then((data) => {
					axios
						.get(`${BACKEND_URL}/apis/daily-mission-progress`)
						.then((response) => callbackFn(response.data))
				})
			}
		})
};

export default getDailyMission;