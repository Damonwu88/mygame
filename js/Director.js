/*
 * @Author: Damon Wu
 * @Date: 2018-08-20 15:18:00
 * @LastEditors: Damon Wu
 * @LastEditTime: 2018-08-20 16:46:10
 * @Description: 小游戏导演类
 */
import DataStore from "./base/DataStore.js";

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
		this.checkStatus();
		if (!this.isGameOver) {
			let timer = requestAnimationFrame(() => this.run());
			this.datastore.put("timer", timer);
			this.datastore.get("bg").draw();
			this.datastore.get("land").draw();
		} else {
			console.log("游戏结束！");
			this.datastore.get("startButton").draw();
			cancelAnimationFrame(this.datastore.get('timer'));
			this.datastore.destroy();
		}

	}

	checkStatus() {
		if (this.datastore.get("timer") > 100) {
			this.isGameOver = true;
		}
	}


}

export default Director;