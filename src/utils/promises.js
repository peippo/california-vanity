export const delay = (ms) => {
	return function (passedValue) {
		return new Promise((resolve) =>
			setTimeout(() => resolve(passedValue), ms)
		);
	};
};
