import axios from "axios";
import React from "react";
import "./App.scss";
import AddEventForm from "./components/AddEventForm/AddEventForm";
import List from "./components/List/List";
import { EventInterface } from "./interfaces/event.interface";

const API = "http://localhost:3001/events";

export default class App extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			name: "Obi-wan",
			events: [],
		};
	}

	declare state: {
		name: string;
		events: EventInterface[];
	};

	async componentDidMount() {
		await this.getEvents();
	}

	async getEvents() {
		const temp = await axios.get(API);
		this.setState({ events: temp.data });
	}

	async removeEvent(id: number) {
		const removed = await axios.delete(`${API}/${id}`);
		await this.getEvents();
	}

	async createEvent(values: any) {
		const created = await axios.post(API, values);
		this.getEvents();
	}

	render() {
		const { events } = this.state;

		return (
			<div className="App">
				<AddEventForm onsubmit={(e: any) => this.createEvent(e)} />
				<List events={events} onremove={(e: number) => this.removeEvent(e)} />
			</div>
		);
	}
}
