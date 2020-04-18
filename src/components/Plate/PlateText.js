import * as THREE from "three";
import React, { useMemo } from "react";
import { useLoader, useUpdate } from "react-three-fiber";

const PlateText = ({ identifier, color }) => {
	const font = useLoader(THREE.FontLoader, "../plate-font.json");
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

	const ref = useUpdate(
		(self) => {
			const size = new THREE.Vector3();
			self.geometry.computeBoundingBox();
			self.geometry.boundingBox.getSize(size);
			self.position.x = -(size.x / 2) * 0.1;
			self.position.y = -(size.y / 2) * 0.1;
		},
		[identifier]
	);

	return (
		<mesh ref={ref} scale={[0.1, 0.1, 0.1]} position={[0, 0, 0]}>
			<textGeometry attach="geometry" args={[identifier, config]} />
			<meshPhongMaterial
				attach="material"
				color={color}
				shininess={30}
				specular={"rgb(150, 150, 150)"}
			/>
		</mesh>
	);
};

export default PlateText;
