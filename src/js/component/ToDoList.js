import React from "react";

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
	}
	render() {
		return <div>Hello World</div>;
	}
	addTask() {
		console.log("addTask");
	}
	removeTask() {
		console.log("removeTask");
	}
}

export { ToDoList as default };
