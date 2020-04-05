import React from "react";

const PlateBack = ({ color }) => {
	const material = (
		<meshPhongMaterial
			attach="material"
			color={color}
			shininess={5}
			specular={"rgb(150, 150, 150)"}
		/>
	);
	return (
		<group>
			{/* Back */}
			<mesh scale={[1, 1, 1]} position={[0, 0, -0.1]}>
				<boxBufferGeometry attach="geometry" args={[6, 3, 0.25]} />
				{material}
			</mesh>

			{/* Sides */}
			<mesh scale={[1, 1, 1]} position={[0, -1.5, -0.1]}>
				<boxBufferGeometry attach="geometry" args={[6, 0.25, 0.33]} />
				{material}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[0, 1.5, -0.1]}>
				<boxBufferGeometry attach="geometry" args={[6, 0.25, 0.33]} />
				{material}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[-3, 0, -0.1]}>
				<boxBufferGeometry attach="geometry" args={[0.25, 3, 0.33]} />
				{material}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[3, 0, -0.1]}>
				<boxBufferGeometry attach="geometry" args={[0.25, 3, 0.33]} />
				{material}
			</mesh>

			{/* Corners */}
			<mesh
				scale={[1, 1, 1]}
				position={[-3, 1.5, -0.1]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, 0.33, 20, 20, false]}
				/>
				{material}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[3, 1.5, -0.1]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, 0.33, 20, 20, false]}
				/>
				{material}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[-3, -1.5, -0.1]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, 0.33, 20, 20, false]}
				/>
				{material}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[3, -1.5, -0.1]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, 0.33, 20, 20, false]}
				/>
				{material}
			</mesh>
		</group>
	);
};

export default PlateBack;
