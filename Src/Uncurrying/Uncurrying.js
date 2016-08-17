/**
 * 更方便的借用对象
 */ 
export default class Uncurrying {
	constructor() {
		Function.prototype.uncurrying = function() {
			var self = this;
			return function() {
				var obj = [].prototype.shift.call(arguments);
				return self.apply(obj, arguments);
			}
		}
	}
}