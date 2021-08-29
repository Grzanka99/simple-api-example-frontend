import React from "react";
import "./RemoveButton.scss";
import trashIcon from "../../assets/trash.svg";

export default function RemoveButton(props) {
	return (
		<button className="Button" onClick={() => props.onremove(props.id)}>
			<img src={trashIcon} />
		</button>
	);
}
