/* 下部分铅笔类
 * @Author: Damon Wu 
 * @Date: 2018-08-21 10:27:08 
 * @Last Modified by: Damon Wu
 * @Last Modified time: 2018-08-22 15:15:03
 */
import DataStore from "../base/DataStore.js";
import Sprite from "../base/Sprite.js";
import {
	Pencil
} from "./Pencil.js";
import Director from "../Director.js";

export class DownPencil extends Pencil {
	constructor(top) {
		const image = Sprite.getImage("downPencil");
		super(image, top);
		this.top = top;
		this.moveSpeed = Director.getInstance().moveSpeed;
	}
	draw() {
		this.y = this.top + DataStore.getInstance().canvas.height / 5;
		super.draw();
	}
}