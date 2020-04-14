import React from "react";
import { Dom, useThree } from "react-three-fiber";
import { ReactComponent as LogoSVG } from "./Logo.svg";

const Logo = () => {
	const scene = useThree();
	const pos = scene.size.width > 700 ? [-2.5, 3, 0] : [-1.5, 3, 0];

	return (
		<Dom position={pos}>
			<LogoSVG className="logo" />
		</Dom>
	);
};

export default Logo;
