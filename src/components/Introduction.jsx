import React from "react";
import { Html } from "@react-three/drei";

const Introduction = () => {
	return (
		<Html center={true} position={[0, 0.5, 0]} prepend={true}>
			<div className="introduction">
				<p className="introduction__content">
					<span>
						10k+ personalized license plate applications the California
						DMV received &amp; flagged for additional review in 2015-2016
					</span>
				</p>

				<p className="introduction__tech">
					<a href="https://github.com/facebook/react">React</a>{" "}
					<a href="https://github.com/mrdoob/three.js/">Three.js</a>{" "}
					<a href="https://github.com/react-spring/react-three-fiber">
						react-three-fiber
					</a>
				</p>
				<p className="introduction__tech">
					<a href="https://aws.amazon.com/lambda/">AWS Lambda</a>{" "}
					<a href="https://aws.amazon.com/dynamodb/">AWS DynamoDB</a>{" "}
				</p>
				<p className="introduction__tech">
					<a href="https://github.com/veltman/ca-license-plates">
						Dataset
					</a>{" "}
					<a href="https://github.com/peippo/california-vanity">GitHub</a>
				</p>
			</div>
		</Html>
	);
};

export default Introduction;
