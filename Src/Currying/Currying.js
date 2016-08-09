/**
 * Created by maizhikun on 16/7/29.
 */
export default class Currying {
    constructor(fn) {
        let args = [];
        return function() {
            if (arguments.length === 0 ) {
                return fn.apply(this, args);
            } else {
            	[].push.apply(args, arguments);
            	return arguments.callee;
            }
        }
    }
}