export const randomDegree = (num) => {
	return randomizePosNeg(Math.floor(Math.random() * num));
};

export const randomizePosNeg = (num) => {
	return num * (Math.floor(Math.random() * 2) === 1 ? 1 : -1);
};
