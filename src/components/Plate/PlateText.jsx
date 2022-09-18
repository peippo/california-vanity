import * as THREE from "three";
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import plateFont from "./plate-font.json";

extend({ TextGeometry });

const PlateText = ({ identifier, color }) => {
	const font = new FontLoader().parse(plateFont);
	const ref = useRef();

	const config = useMemo(
		() => ({
			font,
			size: 10,
			height: 0.5,
			curveSegments: 8,
			bevelEnabled: true,
			bevelThickness: 0.1,
			bevelSize: 0.2,
			bevelOffset: 0,
			bevelSegments: 1,
		}),
		[font]
	);

	useLayoutEffect(() => {
		if (!ref.current) return;
		const size = new THREE.Vector3();
		ref.current.geometry.computeBoundingBox();
		ref.current.geometry.boundingBox.getSize(size);
		ref.current.position.x = -(size.x / 2) * 0.1;
		ref.current.position.y = -(size.y / 2) * 0.1;
	}, [identifier]);

	return (
		<mesh ref={ref} scale={[0.1, 0.1, 0.1]} position={[0, 0, 0]}>
			<textGeometry attach="geometry" args={[identifier, config]} />
			<meshPhongMaterial
				attach="material"
				color={color}
				shininess={20}
				specular={"rgb(150, 150, 150)"}
			/>
		</mesh>
	);
};

export default PlateText;
