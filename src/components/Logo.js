import React from "react";
import { Dom, useThree } from "react-three-fiber";
import { ReactComponent as LogoSVG } from "./Logo.svg";

const Logo = () => {
	const scene = useThree();
	const pos = scene.size.width > 900 ? [-1.5, 2.8, 0] : [0, 2.8, 0];

	return (
		<Dom position={pos} center={true}>
			<LogoSVG className="logo" />
		</Dom>
	);
};

export default Logo;
