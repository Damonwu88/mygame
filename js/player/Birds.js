import Sprite from "../base/Sprite";
import DataStore from "../base/DataStore";

export class Birds extends Sprite {
	constructor() {
		const image = Sprite.getImage("birds");
		const screenH = DataStore.getInstance().canvas.height;
		super(
			image,
			0,
			0,
			image.width / 3,
			image.height,
			0,
			(screenH - image.height) / 2,
			image.width / 3,
			image.height
		);
		this.time = 0;
	}
	draw() {
		//重力加速度
		const g = 0.98 / 2.4;
		//点击时小鸟往上偏移量
		const offsetUp = 30;
		//小鸟位移
		const offsetY = (g * this.time) / 2;
		this.time++;
		this.y = this.y + offsetY;
		super.draw();
	}
}