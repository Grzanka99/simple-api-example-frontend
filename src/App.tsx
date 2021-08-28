import React, { useState } from "react";
import "./App.scss";

function App() {
	const [name] = useState("Obi-wan");

	return <div className="bg-gray-300">Hello There {name}</div>;
}

export default App;
