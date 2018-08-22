/* 上部分铅笔类
 * @Author: Damon Wu 
 * @Date: 2018-08-21 10:34:16 
 * @Last Modified by: Damon Wu
 * @Last Modified time: 2018-08-22 15:15:37
 */
import DataStore from "../base/DataStore.js";
import Sprite from "../base/Sprite.js";
import {
	Pencil
} from "./Pencil.js";

export class UpPencil extends Pencil {
	constructor(top) {
		const image = Sprite.getImage("upPencil");
		super(image, top);
	}

	draw() {
		this.y = this.top - this.height;
		super.draw();
	}
}