export const randomMax = (num) => {
	return Math.floor(Math.random() * num);
};

export const randomDegree = (num) => {
	return randomizePosNeg(randomMax(num));
};

export const randomizePosNeg = (num) => {
	return num * (Math.floor(Math.random() * 2) === 1 ? 1 : -1);
};
