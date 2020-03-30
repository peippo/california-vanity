import { baseUrl } from "../utils/config";

export const getRandom = async () => {
	try {
		let response = await fetch(`${baseUrl}/plates/random`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
