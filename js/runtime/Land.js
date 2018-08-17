import DataStore from "../base/DataStore.js";
import Director from "../Director.js";
import Sprite from "../base/Sprite.js";

//陆地类
class Land extends Sprite {
	constructor() {
		const image = Sprite.getImage("land");
		const screenW = DataStore.getInstance().canvas.width;
		const screenH = DataStore.getInstance().canvas.height;
		super(image, 0, 0, image.width, image.height, 0, screenH - image.height, image.width, image.height);
		//陆地移动x坐标及速度
		this.landX = 0;
		this.landSpeed = Director.getInstance().moveSpeed;
	}

	draw() {
		this.landX = this.landX + this.landSpeed;
		if (this.landX >= (this.img.width - DataStore.getInstance().canvas.width)) {
			this.landX = 0;
		}
		//参数值为构造方法时初始化的值
		super.draw(this.img,
			this.srcX,
			this.srcY,
			this.srcW,
			this.srcH, 
			-this.landX,
			this.y,
			this.width,
			this.height);
	}
}

export default Land;