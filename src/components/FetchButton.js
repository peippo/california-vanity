import React from "react";
import { Dom, useThree } from "react-three-fiber";

const FetchButton = ({ onClick, isFetching }) => {
	const scene = useThree();

	let posY = -0.4;
	if (scene.size.width > 700) {
		posY = -1;
	}

	if (scene.size.width > 900) {
		posY = -1.5;
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
