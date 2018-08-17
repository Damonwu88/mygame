//缓存变量，方便我们在不同勒种修改和访问变量
class DataStore {
	constructor() {
		this.map = new Map();
	}

	static getInstance() {
		if (!DataStore.Instance) {
			DataStore.Instance = new DataStore();
		}
		return DataStore.Instance;
	}

	put(key, value) {
		if(typeof value === 'function'){
			value = new value();
		}
		this.map.set(key, value);
		//可以链式调用
		return this;
	}

	get(key){
		return this.map.get(key) || null;
	}

	destroy(){
		for(let value of this.map.values()){
			value = null;
		}
		this.map.clear();
	}
}

export default DataStore;