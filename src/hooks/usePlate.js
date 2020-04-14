import { useState, useEffect, useCallback } from "react";
import { baseUrl } from "../utils/config";
import { delay } from "../utils/promises";

const usePlate = (id) => {
	const [isFetching, setIsFetching] = useState(true);
	const [application, setApplication] = useState(null);
	const [error, setError] = useState(null);

	const fetchPlate = useCallback(() => {
		const colors = [
			{
				back: "rgb(18, 74, 173)",
				text: "rgb(213, 160, 1)",
				texture: "blue-yellow",
			},
			{
				back: "rgb(216, 216, 208)",
				text: "rgb(0, 0, 60)",
				texture: "white-black",
			},
			{
				back: "rgb(18, 20, 21)",
				text: "rgb(246, 159, 48)",
				texture: "black-yellow",
			},
		];

		setIsFetching(true);
		setApplication(null);
		setError(null);

		fetch(`${baseUrl}/plates/single/${id}`)
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
	}, [id]);

	useEffect(() => {
		fetchPlate();
	}, [fetchPlate]);

	return { application, isFetching, error };
};

export default usePlate;
