import { useState, useCallback, useEffect } from "react";
import { baseUrl } from "../utils/config";

const useCount = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState(null);
	const [plateCount, setPlateCount] = useState(null);

	const fetchCount = useCallback(() => {
		setPlateCount(null);
		setError(null);

		const savedCount = sessionStorage.getItem("count");

		if (savedCount) {
			setPlateCount(savedCount);
			setIsFetching(false);
		} else {
			fetch(`${baseUrl}/plates/count`)
				.then((response) => response.json())
				.then((data) => {
					setPlateCount(data);
					sessionStorage.setItem("count", data);
				})
				.catch((error) => setError(error))
				.finally(() => setIsFetching(false));
		}
	}, []);

	useEffect(() => {
		fetchCount();
	}, [fetchCount]);

	return { plateCount, isFetching, error };
};

export default useCount;
