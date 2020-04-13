import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { useHistory, useParams } from "react-router-dom";
import usePlate from "../hooks/usePlate";
import { randomMax } from "../utils/numbers";

import Plate from "./Plate/Plate";

const Frontpage = ({ plateCount }) => {
	const history = useHistory();
	const { id } = useParams();
	let plateId = id ? id : randomMax(plateCount);

	const { application, isFetching, error } = usePlate(plateId);

	const handleClick = () => {
		history.push(`/plate/${randomMax(plateCount)}`);
	};

	useEffect(() => {
		history.push(`/plate/${plateId}`);
	}, [plateId, history]);

	return (
		<>
			<button onClick={handleClick}>Fetch a plate</button>
			<Canvas>
				<Suspense fallback={null}>
					<ambientLight intensity={0.5} />
					<spotLight position={[20, 350, 250]} intensity={0.75} />
					<Plate
						identifier={application?.plate}
						color={application?.color}
						isFetching={isFetching}
					/>
				</Suspense>
			</Canvas>
		</>
	);
};

export default Frontpage;
