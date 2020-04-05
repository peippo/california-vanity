import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { getRandom } from "./services/applications";

import Plate from "./components/Plate/Plate";

function App() {
	const [application, setApplication] = useState(null);
	// const application = { plate: "TESTING" };

	useEffect(() => {
		getRandom().then(data => setApplication(data));
	}, []);

	return (
		<Canvas>
			<Suspense fallback={null}>
				<ambientLight intensity={0.5} />
				<spotLight position={[20, 150, 50]} intensity={1.25} />
				{application && <Plate identifier={application.plate} />}
			</Suspense>
		</Canvas>
	);
}

export default App;
