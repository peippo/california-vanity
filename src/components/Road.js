import React, { useRef } from "react";
import { useThree, useFrame } from "react-three-fiber";

const Road = ({ ...props }) => {
	const group = useRef();
	const { mouse } = useThree();

	useFrame(({ clock }) => {
		group.current.rotation.z = mouse.x * 0.05;
	});

	return (
		<group
			ref={group}
			scale={[1, 1, 1]}
			position={[0, -2, -5]}
			rotation={[5, 0, 0]}
			{...props}
		>
			<mesh receiveShadow scale={[1, 5, 1]} position={[0, 0, -0.1]}>
				<planeBufferGeometry attach="geometry" args={[6, 3]} />
				<meshPhysicalMaterial attach="material" color={"#554b42"} />
			</mesh>
			<mesh receiveShadow scale={[0.03, 5, 1]} position={[-0.15, 0, -0]}>
				<planeBufferGeometry attach="geometry" args={[6, 3]} />
				<meshPhongMaterial
					attach="material"
					color={"#d68f2a"}
					shininess={1}
					specular={"rgb(255, 255, 255)"}
				/>
			</mesh>
			<mesh receiveShadow scale={[0.03, 5, 1]} position={[0.15, 0, -0]}>
				<planeBufferGeometry attach="geometry" args={[6, 3]} />
				<meshPhongMaterial
					attach="material"
					color={"#d68f2a"}
					shininess={5}
					specular={"rgb(255, 255, 255)"}
				/>
			</mesh>
			<mesh receiveShadow scale={[0.02, 5, 1]} position={[2.6, 0, -0]}>
				<planeBufferGeometry attach="geometry" args={[6, 3]} />
				<meshPhysicalMaterial attach="material" color={"#bfbab5"} />
			</mesh>
			<mesh receiveShadow scale={[0.02, 5, 1]} position={[-2.6, 0, -0]}>
				<planeBufferGeometry attach="geometry" args={[6, 3]} />
				<meshPhysicalMaterial attach="material" color={"#bfbab5"} />
			</mesh>
		</group>
	);
};

export default Road;
