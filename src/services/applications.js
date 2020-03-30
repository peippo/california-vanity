import { baseUrl } from "../utils/config";

export const getRandom = async () => {
	let response = await fetch(`${baseUrl}/plates/random`);
	let data = await response.json();
	return data;
};
