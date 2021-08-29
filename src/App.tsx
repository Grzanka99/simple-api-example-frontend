import axios from "axios";
import React from "react";
import "./App.scss";
import AddEventForm from "./components/AddEventForm/AddEventForm";
import List from "./components/List/List";
import { EventInterface } from "./interfaces/event.interface";
import CONFIG from "../config.json";

const API = CONFIG.api;

export default class App extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			events: [],
		};
	}

	declare state: {
		events: EventInterface[];
	};

	async componentDidMount() {
		await this.getEvents();
	}

	async getEvents() {
		const temp = await axios.get(`${API}/events`);
		this.setState({ events: temp.data });
	}

	async removeEvent(id: number) {
		const removed = await axios.delete(`${API}/events/${id}`);
		await this.getEvents();
	}

	async createEvent(values: any) {
		const created = await axios.post(`${API}/events`, values);
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
