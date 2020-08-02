"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello,' + this.greeting;
    };
    return Greeter;
}());
var greet = new Greeter('hu');
/**
 * 继承
 *
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("the " + this.name + " moved " + distance + "m");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log('汪汪汪：！！！');
    };
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 3; }
        _super.prototype.move.call(this, distance);
        console.log('this.dog', this.name);
    };
    return Dog;
}(Animal));
var dog = new Dog('dog');
var dog2 = new Dog('dog2');
dog.bark();
dog.move(10);
dog.bark();
dog2.move();
var Octopus = /** @class */ (function () {
    function Octopus(num1) {
        this.number1 = num1;
    }
    return Octopus;
}());
/**
 * 参数属性
 */
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name) {
        this.name = name;
        this.keyName = name;
    }
    return ParameterProperties;
}());
new ParameterProperties('');
var Accessor = /** @class */ (function () {
    function Accessor() {
        this._name = '';
    }
    Object.defineProperty(Accessor.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Accessor;
}());
var accessor = new Accessor();
console.log(accessor.name);
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountDepartment.prototype.sayName = function () {
        console.log('account');
    };
    return AccountDepartment;
}(Department));
var Point = /** @class */ (function () {
    function Point() {
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());
var p3 = { x: 1, y: 2, z: 3 };
