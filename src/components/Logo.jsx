import React from "react";
import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { ReactComponent as LogoSVG } from "./Logo.svg";

const Logo = ({ onClick }) => {
	const scene = useThree();
	const pos = scene.size.width > 900 ? [-1.5, 2.8, 0] : [0, 2.8, 0];

	return (
		<Html position={pos} center={true}>
			<LogoSVG onClick={onClick} className="logo" />
		</Html>
	);
};

export default Logo;
