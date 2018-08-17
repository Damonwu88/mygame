import Sprite from "../base/Sprite.js";
import DataStore from "../base/DataStore.js";

//背景类精灵
class BackGround extends Sprite {
	constructor() {
		const image = Sprite.getImage("bg");
		const screenW = DataStore.getInstance().canvas.width;
		const screenH = DataStore.getInstance().canvas.height;
		super(image, 0, 0, image.width, image.height, 0, 0, screenW, screenH);
	}
}

export default BackGround;