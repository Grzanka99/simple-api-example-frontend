import React from "react";
import "./List.scss";
import { EventInterface } from "../../interfaces/event.interface";
import RemoveButton from "../RemoveButton/RemoveButton";
import { prettyDateString } from "../AddEventForm/AddEventForm";

interface Props {
	events: EventInterface[];
	onremove: Function;
}

export default function List({ events, onremove }: Props) {
	return (
		<ul className="List">
			<li className="List__li">
				<span>First Name</span>
				<span>Last Name</span>
				<span>Email Address</span>
				<span>Event Date</span>
			</li>
			{events.map(({ id, firstName, lastName, email, event }: EventInterface) => (
				<li className="List__li List__li--hover" key={id}>
					<span>{firstName}</span>
					<span>{lastName}</span>
					<span>{email}</span>
					<span>{prettyDateString(event)}</span>
					<RemoveButton id={id} onremove={(e: number) => onremove(e)} />
				</li>
			))}
		</ul>
	);
}
