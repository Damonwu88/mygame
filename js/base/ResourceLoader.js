import Resources from "./Resources.js"

//图片资源加载器
class ResourceLoader {
	constructor() {
		this.map = new Map(Resources);
		for (let [key, value] of this.map) {
			const image = new Image();
			image.src = value;
			this.map.set(key, image);
		}
	}

	onLoaded(callback) {
		var count = 0;
		for (let value of this.map.values()) {
			value.onload = () => {
				count++;
				if (count >= this.map.size) {
					callback(this.map);
				}
			}
		}
	}

	static create() {
		return new ResourceLoader();
	}
}
export default ResourceLoader;