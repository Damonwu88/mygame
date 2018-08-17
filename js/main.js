import ResourceLoader from "./base/ResourceLoader.js";
import DataStore from "./base/DataStore.js";
import Director from "./Director.js";
import BackGround from "./runtime/BackGround.js";
import Land from "./runtime/Land.js";
import StartButton from "./runtime/StartButton.js";

//初始化整个游戏的精灵，作为游戏开始的入口
export default class Main {
	constructor() {
		//初始化canvas
		// this.canvas = document.getElementById("myGame");
		// this.ctx = this.canvas.getContext("2d");
		// this.canvas.width = window.screen.width;
		// this.canvas.height = window.screen.height;

		this.datastore = DataStore.getInstance();
		this.director = Director.getInstance();
		const loader = ResourceLoader.create();
		//资源首次加载,map是ResourceLoader里回调的资源路径map对象
		loader.onLoaded(map => this.onResourceFirstLoaded(map));
		this.director.isGameOver = true;
		// this.bgImg.onload = () => {
		// 	this.ctx.drawImage(this.bgImg, 0, 0, this.bgImg.width, this.bgImg.height, 0, 0, this.canvas.width, this.canvas.height);
		// };
	}

	//游戏初始化
	init() {
		//重置游戏是没有结束的
		this.director.isGameOver = false;
		this.datastore.put("land", Land);
		this.director.run();
	}


	onResourceFirstLoaded(map) {
		this.datastore.canvas = document.getElementById("myGame");
		this.datastore.ctx = this.datastore.canvas.getContext("2d");
		this.datastore.canvas.width = window.screen.width;
		this.datastore.canvas.height = window.screen.height;
		this.datastore.res = map;
		this.registerEvent();

		//将变量存进DataStore
		this.datastore.put("bg", BackGround);
		this.datastore.put("startButton", StartButton);

		//开始渲染
		this.datastore.get("bg").draw();
		this.datastore.get("startButton").draw();

	}

	registerEvent() {
		this.datastore.canvas.addEventListener("touchstart", e => {
			e.preventDefault();
			if (this.director.isGameOver) {
				console.log('游戏开始');
				this.init();
			} else {
				this.director.isGameOver = true;
				cancelAnimationFrame(this.datastore.get('timer'));
				// this.datastore.destroy();
				console.log('游戏结束！');
			}
		})
	}
}