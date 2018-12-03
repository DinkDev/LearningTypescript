//import {Promise} from 'es6-promise'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Improved callbacks using PromiseJS
// 2) add argument 'num'
function asyncMethod(message, num) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log(message + ' ' + num);
            fulfill(num + 1);
        }, 500);
    });
}
// 1) add async/await
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var one = yield asyncMethod('Open DB Connection', 0);
        var two = yield asyncMethod('Find User', one);
        var three = yield asyncMethod('Validate User', two);
        var four = yield asyncMethod('Do stuff', three);
    });
}
main();
