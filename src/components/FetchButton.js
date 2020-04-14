import React from "react";

const FetchButton = ({ onClick, isFetching }) => {
	return (
		<button
			disabled={isFetching}
			className="fetch-button"
			onClick={onClick}
		>
			{isFetching
				? "Processing applications..."
				: "Fetch a random application"}
		</button>
	);
};

export default FetchButton;
