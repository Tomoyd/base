ECMAScript中没有类的概念

## 理解对象

#### 属性类型

ECMAScript中有两种属性：数据属性和访问器属性

- 数据属性	

  > 数据属性包含一个数据值的位置，这个位置可以读写值，数据属性有四个描述其行为的特性

  特性：

  - [[Configurable]]:表示是否内通过delete删除属性从而重行定义属性，能否修改属性特性仿真能否修改为访问器属性，直接定义默认为true，一旦定义为不可配置，就不可能再把它变为可配置的，也不能修改其他特性
  - [[Enumerable]]:表示能否通过for-in循环返回属性，直接定义默认为true
  - [[Writable]]：表示能否修改属性的值，默认为true
  - [[Value]]:包含这个属性的数据值，读取属性值时，从位置读，写时保存到这个位置，默认为undefined

  修改属性的默认特性，必须使用`ES5`的`Object.defineProperty()`方法，

  接受三个参数：属性所在的对象，属性，和描述符对象

  描述符对象必须是：configurable，enumerable，和writable，value中的一个或多个

- 访问器属性

  - [[Configurable]]:表示是否内通过delete删除属性从而重行定义属性，能否修改属性特性仿真能否修改为访问器属性，直接定义默认为true，一旦定义为不可配置，就不可能再把它变为可配置的，也不能修改其他特性
  - [[Enumerable]]:表示能否通过for-in循环返回属性，直接定义默认为true
  - [[Get]]:在读取属性是调用的函数,默认undefined
  - [[Set]]：在写入属性时调用的函数，默认undefined

   必须使用Object.defineProperty()来定义它

#### 读取属性的特性

Object.getOwnPropertyDescriptor()获得某个属性的描述符

两个参数：属性所在的对象，和属性

## 创建对象

#### 工厂模式

用函数封装以特定接口创建对象的细节，问题，可能无法知道一个对象的类型，对象识别问题

#### 构造函数模式

```javascript
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.sayName=function(){
        alert(this.name)
    }
}
var person1=new Person("Tom",79,"Cat");
var person2=new Person("Jerry",78,"Mouse");
// 验证是否为Person对象的实例
person1 instanceof Person;
person2 instanceof Person;
```

1. 构造函数与其他函数唯一不同之处：调用方式不同
2. 不是通过new操作符调用，那么与普通函数没什么两样

构造函数的缺点:

- 每个方法都要在每个实例上重新创建一遍
- 可以将构造函数中的方法在外部定义，只不过在内部引用：
  - 这样，全局作用域的某个函数只有某个对象调用，有的名不副实
  - 要定义很多全局函数，自定义的引用类型没有封装性可言

#### 原型模式

> 每个对象都有一个prototype属性，这个属性是一个指针指向一个对象，这个对象的用途就是包含由特定类型的所有实例共享的属性和方法

```javascript
function Person(){
    
}
Person.prototype.name="TM";
Person.prototype.sayName=function(){
    alert(this.name)
}
```

1. 理解原型对象

   > 无论什么时候只要创建了新函数，就会根据一组特定规则为该函数创建一个prototype属性，这个属性指向函数的原型对象，原型对象都会获得一个constructor属性，这个属性指向prototype属性所在函数，
   >
   > 创建自定义函数后,其原型对象默认只会取得constructor属性，至于其他方法都是从Object中继承而来，
   >
   > 调用构造函数创建新实例，该实例内部就会包含一个指针[[prototype]]，指向构造函数的原型对象，主流浏览器的支持\_\_proto\_\_属性，即指向该实例的原型对象,实例和构造函数之间没有这样的直接关系

   isPrototypeOf()方法，如果某个实例的[[Prototype]]指向调用该方法的对象，那么说明该实例的原型对象是该对象，返回true

   ```javascript
   Person.prototype.isPrototypeOf(person1)
   ```

   ES5中增加了Object.getPrototypeOf()来获取某个实例的[[Prototype]]的值

   hasOwnProperty(）可以用来检测一个属性是属于实例中还是原型中

2. 原型与in操作符

   单独使用：in操作符，判断该属性是否可以在本对象中访问

   在使用for-in时，返回的是所有能够通过访问，可枚举的属性，存在实例中，也包括在原型中，原型屏蔽的属性也会被遍历，（IE8及之前不会被遍历）

   ES5中，Object.keys()返回一个可枚举属性的字符串数组

   Object.getOwnPropertyNames() 返回所有实例属性，不管是否可枚举

3. 原型也可以直接用字面量进行赋值

   ```javascript
   Person.prototype={
       constructor:Person,
       age:19,
       sayeName:function(){
           alert(this.name)
       }
   }
   ```

4. 原型的动态性

   原型对象可以进行动态修改，只要不是重新对原型对象赋值

5. 原生对象的原型

   不仅可以取得默认方法，也可以定义新的方法

6. 原型对象的缺点

   - 忽略了初始化参数，默认情况下都取得相同值，
   - 对于引用类型来说被很多共享，数据的不一致性

#### 组合构造函数模式和原型模式

将方法和共享的属性放到原型上，自己属性的在构造函数中进行初始化

#### 动态原型模式

在构造函数中进行，原型的初始化

```javascript
function Person(name,age){
    this.name=name;
    this.age=age;
    if(typeof this.sayName==="function"){
        Person.prototype.sayName=function(){
            alert(this.name)
        }
    }
}
```

#### 寄生构造函数模式

创建一个函数，仅仅封装创建对象的代码

#### 稳妥构造函数模式

指没有公共属性，其方法也不引用this的对象，适用于安全环境中，禁止适用this和new的或者放置被其他应用程序改动时使用，

与寄生构造函数类似的模式，而又有不同：不使用this，二不使用new

## 继承

1,原型链

2.继承的问题