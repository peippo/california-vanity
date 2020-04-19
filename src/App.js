import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useCount from "./hooks/useCount";

import Frontpage from "./components/Frontpage";

function App() {
	const { plateCount, isFetching, error } = useCount();

	return (
		<Router>
			<Switch>
				<Route exact path={["/", "/plate", "/plate/:id"]}>
					{!isFetching && (
						<Frontpage plateCount={!error ? plateCount : 0} />
					)}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
