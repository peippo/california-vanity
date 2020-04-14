import React, { useRef } from "react";
import { useThree, useFrame } from "react-three-fiber";

const Sun = () => {
	const group = useRef();
	const { mouse } = useThree();

	useFrame(({ clock }) => {
		group.current.children.forEach((child, index) => {
			child.position.x = mouse.x * (index + 1) * 0.1;
			child.position.y = mouse.y * (index + 1) * 0.025;
			child.position.z =
				Math.cos(clock.getElapsedTime()) * 0.25 + (index + 1) * 0.15;
			child.scale.y =
				Math.sin(clock.getElapsedTime()) * 0.5 + (index + 1);
		});
	});

	const geometry = (
		<cylinderBufferGeometry
			attach="geometry"
			args={[1, 1, 0.1, 40, 20, false, Math.PI / 2, Math.PI / 1]}
		/>
	);

	const material = (color) => (
		<meshPhongMaterial
			attach="material"
			color={color}
			shininess={10}
			specular={"rgb(40, 40, 40)"}
		/>
	);

	return (
		<group ref={group} scale={[3.2, 3.2, 3.2]} position={[0, -1, -8]}>
			<mesh
				position={[0, 0, -3]}
				scale={[3, 1, 3]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				{geometry}
				{material("#F6A967")}
			</mesh>
			<mesh
				position={[0, 0, -2]}
				scale={[2.5, 1, 2.5]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				{geometry}
				{material("#F59C69")}
			</mesh>
			<mesh
				position={[0, 0, -1]}
				scale={[2, 1, 2]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				{geometry}
				{material("#F4886C")}
			</mesh>
			<mesh
				position={[0, 0, 0]}
				scale={[1.5, 1, 1.5]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				{geometry}
				{material("#F4786E")}
			</mesh>
			<mesh scale={[1, 1, 1]} rotation={[Math.PI / 2, 0, 0]}>
				{geometry}
				{material("#F36C70")}
			</mesh>
		</group>
	);
};

export default Sun;
