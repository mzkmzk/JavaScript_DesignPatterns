export default class Single {
	constructor(fn) {
		var result;
		return result || ( result = fn.apply(this,arguments));
	}
}