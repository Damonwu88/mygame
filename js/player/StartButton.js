import DataStore from "../base/DataStore.js";
import Sprite from "../base/Sprite.js";

class StartButton extends Sprite {
	constructor() {
		const image = Sprite.getImage("startButton");
		const screenW = DataStore.getInstance().canvas.width;
		const screenH = DataStore.getInstance().canvas.height;
		super(
			image,
			0,
			0,
			image.width,
			image.height,
			(screenW - image.width) / 2,
			(screenH - image.height) / 2.5,
			image.width,
			image.height
		);
	}
}

export default StartButton;