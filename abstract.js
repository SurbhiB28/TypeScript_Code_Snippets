var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*abstract class FooCommand {}

class BarCommand extends FooCommand {}

//const fooCommand: FooCommand = new FooCommand();

const barCommand = new BarCommand();
*/
var FooCommand = /** @class */ (function () {
    function FooCommand() {
    }
    return FooCommand;
}());
//class BarErrorCommand  extends FooCommand {} 
var BarCommand = /** @class */ (function (_super) {
    __extends(BarCommand, _super);
    function BarCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarCommand.prototype.execute = function () {
        return "Command Bar executed";
    };
    return BarCommand;
}(FooCommand));
var barCommand = new BarCommand();
barCommand.execute();
