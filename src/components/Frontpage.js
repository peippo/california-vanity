import React, { Suspense, useEffect } from "react";
import * as THREE from "three/src/Three";
import { Canvas, Dom } from "react-three-fiber";
import { useHistory, useParams } from "react-router-dom";
import usePlate from "../hooks/usePlate";
import { randomMax } from "../utils/numbers";

import Plate from "./Plate/Plate";
import ApplicationForm from "./ApplicationForm";
import Sun from "./Sun";
import PalmTree from "./PalmTree";
import Road from "./Road";
import FetchButton from "./FetchButton";
import Logo from "./Logo";

const Frontpage = ({ plateCount }) => {
	const history = useHistory();
	const { id } = useParams();
	let plateId = id ? id : randomMax(plateCount);

	const { application, isFetching, error } = usePlate(plateId);

	const handleClick = () => {
		history.push(`/plate/${randomMax(plateCount)}`);
	};

	useEffect(() => {
		history.push(`/plate/${plateId}`);
	}, [plateId, history]);

	return (
		<Canvas
			onCreated={({ gl }) => {
				gl.shadowMap.enabled = true;
				gl.shadowMap.type = THREE.PCFSoftShadowMap;
			}}
		>
			<Suspense fallback={null}>
				<ambientLight intensity={0.5} />
				<spotLight
					position={[0, 2, 10]}
					intensity={0.6}
					penumbra={1}
					castShadow
				/>
				<Plate
					identifier={application?.plate}
					color={application?.color}
					isFetching={isFetching}
				/>
				<Logo />
				<Sun />
				<Road />
				<PalmTree
					position={[1.5, -0.8, 0]}
					rotation={[-Math.PI / 2, 0, 6.2]}
					scale={[0.005, 0.005, 0.005]}
				/>
				<PalmTree
					position={[-1.5, -0.8, 0]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}
					scale={[0.0045, 0.0045, 0.0045]}
				/>
				<PalmTree
					position={[-1.9, -0.9, 0]}
					rotation={[-Math.PI / 2, 0, 6]}
					scale={[0.0045, 0.0045, 0.0045]}
				/>
				<ApplicationForm
					application={application}
					isFetching={isFetching}
				/>
				<Dom position={[0, -2, 0]} center={true}>
					<FetchButton
						onClick={handleClick}
						isFetching={isFetching}
					/>
				</Dom>
			</Suspense>
		</Canvas>
	);
};

export default Frontpage;
