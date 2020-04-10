import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import useRandom from "./hooks/useRandom";

import Plate from "./components/Plate/Plate";

function App() {
	const { fetchRandom, isFetching, application, error } = useRandom();

	return (
		<>
			<button onClick={fetchRandom}>Fetch a plate</button>
			<Canvas>
				<Suspense fallback={null}>
					<ambientLight intensity={0.5} />
					<spotLight position={[20, 350, 250]} intensity={0.75} />
					{error ? (
						<Plate identifier={"ERROR!"} />
					) : (
						<Plate
							identifier={application?.plate}
							color={application?.color}
							isFetching={isFetching}
						/>
					)}
				</Suspense>
			</Canvas>
		</>
	);
}

export default App;
