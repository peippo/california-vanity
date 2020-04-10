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

	const backMaterial = (
		<meshPhongMaterial
			attach="material"
			color={"black"}
			shininess={3}
			specular={"rgb(150, 150, 150)"}
		/>
	);

	const backHeight = 0.01;
	const backZPosition = -0.15;

	const sideHeight = 0.1;
	const sideZPosition = -0.075;

	return (
		<group>
			{/* Front */}
			<mesh scale={[1, 1, 1]} position={[0, 0, -0.1]}>
				<boxBufferGeometry attach="geometry" args={[6, 3, 0.05]} />
				{material}
			</mesh>

			{/* Front / Sides */}
			<mesh scale={[1, 1, 1]} position={[0, -1.5, sideZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[6, 0.25, sideHeight]}
				/>
				{material}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[0, 1.5, sideZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[6, 0.25, sideHeight]}
				/>
				{material}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[-3, 0, sideZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[0.25, 3, sideHeight]}
				/>
				{material}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[3, 0, sideZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[0.25, 3, sideHeight]}
				/>
				{material}
			</mesh>

			{/* Front / Corners */}
			<mesh
				scale={[1, 1, 1]}
				position={[-3, 1.5, sideZPosition]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, sideHeight, 20, 20, false]}
				/>
				{material}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[3, 1.5, sideZPosition]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, sideHeight, 20, 20, false]}
				/>
				{material}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[-3, -1.5, sideZPosition]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, sideHeight, 20, 20, false]}
				/>
				{material}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[3, -1.5, sideZPosition]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, sideHeight, 20, 20, false]}
				/>
				{material}
			</mesh>

			{/* Back */}
			<mesh scale={[1, 1, 1]} position={[0, 0, backZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[6, 3, backHeight]}
				/>
				{backMaterial}
			</mesh>

			{/* Back / Sides */}
			<mesh scale={[1, 1, 1]} position={[0, -1.5, backZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[6, 0.25, backHeight]}
				/>
				{backMaterial}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[0, 1.5, backZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[6, 0.25, backHeight]}
				/>
				{backMaterial}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[-3, 0, backZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[0.25, 3, backHeight]}
				/>
				{backMaterial}
			</mesh>
			<mesh scale={[1, 1, 1]} position={[3, 0, backZPosition]}>
				<boxBufferGeometry
					attach="geometry"
					args={[0.25, 3, backHeight]}
				/>
				{backMaterial}
			</mesh>

			{/* Back / Corners */}
			<mesh
				scale={[1, 1, 1]}
				position={[-3, 1.5, backZPosition]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, backHeight, 20, 20, false]}
				/>
				{backMaterial}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[3, 1.5, backZPosition]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, backHeight, 20, 20, false]}
				/>
				{backMaterial}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[-3, -1.5, backZPosition]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, backHeight, 20, 20, false]}
				/>
				{backMaterial}
			</mesh>
			<mesh
				scale={[1, 1, 1]}
				position={[3, -1.5, backZPosition]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<cylinderBufferGeometry
					attach="geometry"
					args={[0.125, 0.125, backHeight, 20, 20, false]}
				/>
				{backMaterial}
			</mesh>
		</group>
	);
};

export default PlateBack;
