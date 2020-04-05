import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

import PlateText from "./PlateText";
import PlateBack from "./PlateBack";

const Plate = ({ identifier }) => {
	const group = useRef();

	const colors = [
		{ back: "rgb(18, 74, 173)", text: "rgb(213, 160, 1)" },
		{ back: "rgb(216, 216, 208)", text: "rgb(0, 0, 60)" },
		{ back: "rgb(18, 20, 21)", text: "rgb(246, 159, 48)" }
	];
	const color = colors[Math.floor(Math.random() * colors.length)];

	useFrame(
		({ clock }) =>
			(group.current.rotation.x = group.current.rotation.y = group.current.rotation.z =
				Math.cos(clock.getElapsedTime()) * 0.15)
	);

	return (
		<group ref={group}>
			<PlateText identifier={identifier} color={color.text} />
			<PlateBack color={color.back} />
		</group>
	);
};

export default Plate;
