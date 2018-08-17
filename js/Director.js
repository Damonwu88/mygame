import DataStore from "./base/DataStore.js";
import Land from "./runtime/Land.js";

class Director {
	constructor() {
		this.datastore = DataStore.getInstance();
		this.moveSpeed = 2;
	}

	static getInstance() {
		if (!Director.instance) {
			Director.instance = new Director();
		}
		return Director.instance;
	}

	run() {
		let timer = requestAnimationFrame(() => this.run());
		this.datastore.put("timer", timer);
		this.datastore.get("land").draw();
	}


}

export default Director;