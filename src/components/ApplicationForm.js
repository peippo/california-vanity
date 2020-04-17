import React, { useRef, useEffect } from "react";
import { Dom } from "react-three-fiber";
import { randomizePosNeg } from "../utils/numbers";

import { ReactComponent as LogoSVG } from "./DMVlogo.svg";

const ApplicationForm = ({ application, isFetching }) => {
	const formRef = useRef();
	const reviewReasonCodes = [
		null,
		"The configuration has a sexual connotation or is a term of lust or depravity.",
		"The configuration is a vulgar term; a term of contempt, prejudice, or hostility; an insulting or degrading term; a racially degrading term; or an ethnically degrading term.",
		"The configuration is a swear word or term considered profane, obscene, or repulsive.",
		"The configuration has a negative connotation to a specific group.",
		"The configuration misrepresents a law enforcement entity.",
		"The configuration has been deleted from regular series license plates.",
		"The configuration is a foreign or slang word or term, or is a phonetic spelling or mirror image of a word or term falling into the categories described in subdivisions 1. through 6. above.",
	];

	useEffect(() => {
		if (!isFetching) {
			formRef.current.style.setProperty(
				"--form-rotation",
				`${randomizePosNeg(2)}deg`
			);
		}
	}, [isFetching]);

	const formClass = isFetching ? "form__hidden" : "form__visible";

	return (
		<Dom center={true} position={[0, -3.6, 0]}>
			<div ref={formRef} className={`form ${formClass}`}>
				<div className="form__header">
					<LogoSVG className="form__logo" />
					<h2 className="form__mainheading">
						SPECIAL INTEREST LICENSE PLATE APPLICATION
					</h2>
				</div>

				<h3 className="form__heading">
					Section 2 Personalized configuration choice
				</h3>

				<div className="form__content">
					<div className="form__column">
						<h4 className="form__subheading">
							Meaning:{" "}
							<span className="form__required">(Required)</span>
						</h4>
						<p className="form__meaning">
							{application?.customerMeaning}
						</p>
					</div>
					<div className="form__column">
						<h4 className="form__subheading">Reviewer comments:</h4>
						<p>{application?.reviewerComments}</p>
						{application?.reviewReasonCode > 0 && (
							<p className="form__reason">
								{application?.reviewReasonCode}.{" "}
								{
									reviewReasonCodes[
										application?.reviewReasonCode
									]
								}
							</p>
						)}
					</div>
				</div>
				{application?.isApproved ? (
					<div className="form__approved form__approved--true">
						APPROVED
					</div>
				) : (
					<div className="form__approved form__approved--false">
						DENIED
					</div>
				)}
			</div>
		</Dom>
	);
};

export default ApplicationForm;
