import React, { Suspense, useEffect } from "react";
import * as THREE from "three/src/Three";
import { Canvas } from "react-three-fiber";
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
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	const { application, isFetching, error } = usePlate(plateId);

	const handleClick = () => {
		history.push(`/plate/${randomMax(plateCount)}`);
	};

	useEffect(() => {
		history.push(`/plate/${plateId}`);
	}, [plateId, history]);

	return (
		<Canvas
			pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
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
				<spotLight
					position={[1, 3, 5]}
					intensity={0.35}
					color={"orange"}
				/>
				<Plate
					identifier={!error ? application?.plate : "404"}
					color={
						!error
							? application?.color
							: {
									back: "rgb(147, 20, 29)",
									text: "rgb(214, 191, 177)",
									texture: "error",
							  }
					}
					isFetching={isFetching}
				/>
				<Logo />
				<Road />
				<Sun />
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
				{!error && (
					<ApplicationForm
						application={application}
						isFetching={isFetching}
					/>
				)}
				<FetchButton onClick={handleClick} isFetching={isFetching} />
			</Suspense>
		</Canvas>
	);
};

export default Frontpage;
