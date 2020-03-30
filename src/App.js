import React, { useState, useEffect } from "react";
import { getRandom } from "./services/applications";

function App() {
	const [application, setApplication] = useState(null);

	useEffect(() => {
		getRandom().then(data => setApplication(data));
	}, []);

	return (
		<div>
			<p>{application?.plate}</p>
		</div>
	);
}

export default App;
