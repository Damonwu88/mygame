import DataStore from "../base/DataStore.js";
import Sprite from "../base/Sprite.js";


export class BeginButton extends Sprite {
	constructor() {
		const image = Sprite.getImage("beginButton");
		const screenW = DataStore.getInstance().canvas.width;
		const screenH = DataStore.getInstance().canvas.height;
		super(image, 0, 0, image.width, image.height, (screenW - image.width / 2) / 2, (screenH - image.height) / 2.5, image.width / 2, image.height / 2);
	}
}