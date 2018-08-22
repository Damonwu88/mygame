/* 精灵类
 * @Author: Damon Wu 
 * @Date: 2018-08-21 10:35:38 
 * @Last Modified by: Damon Wu
 * @Last Modified time: 2018-08-21 14:37:05
 */
import DataStore from "./DataStore.js";

//精灵基类，负责初始化精灵加载的资源和大小以及位置
class Sprite {
	constructor(image = null,
		srcX = 0,
		srcY = 0,
		srcW = 0,
		srcH = 0,
		x = 0,
		y = 0,
		width = 0,
		height = 0) {
		this.datastore = DataStore.getInstance();
		this.ctx = this.datastore.ctx;
		this.image = image;
		this.srcX = srcX;
		this.srcY = srcY;
		this.srcW = srcW;
		this.srcH = srcH;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	static getImage(key) {
		//存在Sprite类没有初始化DataStore情况
		if (!this.datastore) {
			this.datastore = DataStore.getInstance();
		}
		return this.datastore.res.get(key);
	}
	/**
	 * img 传入Image对象
	 * srcX 要剪裁的起始X坐标
	 * srcY 要剪裁的起始Y坐标
	 * srcW 剪裁的宽度
	 * srcH 剪裁的高度
	 * x 放置的x坐标
	 * y 放置的y坐标
	 * width 要使用的宽度
	 * height 要使用的高度
	 */
	draw(image = this.image,
		srcX = this.srcX,
		srcY = this.srcY,
		srcW = this.srcW,
		srcH = this.srcH,
		x = this.x,
		y = this.y,
		width = this.width,
		height = this.height) {
		this.ctx.drawImage(image, srcX, srcY, srcW, srcH, x, y, width, height);
	}
}

export default Sprite;