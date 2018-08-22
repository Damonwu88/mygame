/* 铅笔基类
 * @Author: Damon Wu 
 * @Date: 2018-08-21 10:27:08 
 * @Last Modified by: Damon Wu
 * @Last Modified time: 2018-08-22 15:15:34
 */
import DataStore from "../base/DataStore.js";
import Sprite from "../base/Sprite.js";
import Director from "../Director.js";

export class Pencil extends Sprite {
	constructor(image, top) {
		const screenW = DataStore.getInstance().canvas.width;
		const screenH = DataStore.getInstance().canvas.height;
		super(
			image,
			0,
			0,
			image.width,
			image.height,
			screenW,
			0,
			image.width,
			image.height
		);
		this.top = top;
		this.moveSpeed = Director.getInstance().moveSpeed;
	}

	draw() {
		this.x = this.x - this.moveSpeed;
		super.draw(
			this.image,
			0,
			0,
			this.image.width,
			this.image.height,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}
}