import { useState, useEffect, useCallback } from "react";
import { baseUrl } from "../utils/config";
import { delay } from "../utils/promises";

const useRandom = (immediate = true) => {
	const [isFetching, setIsFetching] = useState(false);
	const [application, setApplication] = useState(null);
	const [error, setError] = useState(null);

	const colors = [
		{ back: "rgb(18, 74, 173)", text: "rgb(213, 160, 1)" },
		{ back: "rgb(216, 216, 208)", text: "rgb(0, 0, 60)" },
		{ back: "rgb(18, 20, 21)", text: "rgb(246, 159, 48)" },
	];

	const fetchRandom = useCallback(() => {
		setIsFetching(true);
		setApplication(null);
		setError(null);

		return fetch(`${baseUrl}/plates/random`)
			.then((response) => response.json())
			.then(delay(400))
			.then((data) =>
				setApplication({
					...data,
					color: colors[Math.floor(Math.random() * colors.length)],
				})
			)
			.catch((error) => setError(error))
			.finally(() => setIsFetching(false));
	}, []);

	useEffect(() => {
		if (immediate) {
			fetchRandom();
		}
	}, [fetchRandom, immediate]);

	return { fetchRandom, isFetching, application, error };
};

export default useRandom;
