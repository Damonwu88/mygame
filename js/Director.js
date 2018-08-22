/*
 * @Author: Damon Wu
 * @Date: 2018-08-20 15:18:00
 * @LastEditors: Damon Wu
 * @LastEditTime: 2018-08-20 16:46:10
 * @Description: 小游戏导演类
 */
import DataStore from "./base/DataStore.js";
import {
	UpPencil
} from "./runtime/UpPencil.js";
import {
	DownPencil
} from "./runtime/DownPencil.js";

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

	createPencil() {
		const maxTop = this.datastore.canvas.height / 2;
		const minTop = this.datastore.canvas.height / 8;
		const top = minTop + Math.random() * (maxTop - minTop);
		console.log(top);
		this.datastore.get("pencils").push(new UpPencil(top));
		this.datastore.get("pencils").push(new DownPencil(top));
	}

	run() {
		this.check();
		if (!this.isGameOver) {
			let timer = requestAnimationFrame(() => this.run());
			this.datastore.put("timer", timer);
			this.datastore.get("bg").draw();
			const pencils = this.datastore.get("pencils");
			if (
				pencils[0].x <= (this.datastore.canvas.width - pencils[0].width) / 2 &&
				pencils.length === 2
			) {
				this.createPencil();
			}
			if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
				pencils.shift();
				pencils.shift();
			}

			pencils.forEach(value => {
				value.draw();
			});
			this.datastore.get("birds").draw();
			this.datastore.get("land").draw();
		} else {
			console.log("游戏结束！");
			this.datastore.get("startButton").draw();
			cancelAnimationFrame(this.datastore.get("timer"));
			this.datastore.destroy();
		}
	}

	//检测小鸟是否与陆地撞击
	checkCrash() {
		const birds = this.datastore.get("birds");
		const land = this.datastore.get("land");
		if (birds.y + birds.height > land.y) {
			this.isGameOver = true;
		}
	}

	//检查小鸟是否与铅笔碰撞
	check() {
		const birds = this.datastore.get("birds");
		const pencils = this.datastore.get("pencils");
		this.checkCrash();
		if (
			birds.x + birds.width / 3 >= pencils[0].x &&
			(birds.y < pencils[0].y + pencils[0].height ||
				birds.y > pencils[1].y - birds.height)
		) {
			this.isGameOver = true;
		}
	}

	//小鸟点击事件
	birdsEvent() {
		this.datastore.get("birds").time = 0;
	}
}

export default Director;