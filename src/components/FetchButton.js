import React from "react";
import { Dom, useThree } from "react-three-fiber";

const FetchButton = ({ onClick, isFetching, introduction }) => {
	const scene = useThree();

	let posY = introduction ? -2 : -0.4;
	if (scene.size.width > 700) {
		posY = introduction ? -2 : -1;
	}

	if (scene.size.width > 900) {
		posY = introduction ? -2 : -1.5;
	}

	return (
		<Dom position={[0, posY, 0]} center={true}>
			<button
				disabled={isFetching}
				className="fetch-button"
				onClick={onClick}
			>
				{isFetching
					? "Processing applications..."
					: "Fetch a random application"}
			</button>
		</Dom>
	);
};

export default FetchButton;
