import React, { useRef } from "react";
import * as THREE from "three/src/Three";
import { useThree, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { randomDegree, randomizePosNeg } from "../../utils/numbers";

import PlateText from "./PlateText";
import PlateBack from "./PlateBack";

const Plate = ({ identifier, color, isFetching }) => {
	const group = useRef();
	const scene = useThree();

	let pos = [0, 0.6, 2];
	if (scene.size.width > 700) {
		pos = [0, 0.4, 2.5];
	}

	if (scene.size.width > 900) {
		pos = [0, 0.2, 3];
	}

	const { ...props } = useSpring({
		scale: isFetching ? [0.25, 0.25, 0.25] : [0.35, 0.35, 0.35],
		rotation: isFetching
			? [
					THREE.MathUtils.degToRad(randomizePosNeg(180)),
					0,
					THREE.MathUtils.degToRad(randomDegree(15)),
			  ]
			: [THREE.MathUtils.degToRad(randomDegree(20)), 0, 0],
		config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
	});

	useFrame(({ clock }) => {
		group.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.15;
	});

	return (
		<animated.group ref={group} position={pos} {...props}>
			{!isFetching && (
				<PlateText identifier={identifier} color={color?.text} />
			)}
			<PlateBack background={color?.back} textureName={color?.texture} />
		</animated.group>
	);
};

export default Plate;
