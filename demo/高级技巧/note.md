# 高级技巧
#### 高级函数
        1.安全的类型检测
            在任何值调用Object原生的toString()方法都会返回[object NativeConstructorName]格式的字符串,每个类
            在内部都有一个[[Class]]属性，这个属性就制定了上述字符串中的构造函数名
            object.prototype.toString.call(value);//[object Array]
            对于IE中COM对象实现的任何函数不适用
        2. 作用域安全的构造函数
                不用new时，直接调用构造函数，构造函数中的this会映射到全局对象上
                导致错误对象属性意外的增加
                作用域安全的构造函数，首先确定this对象是正确类型的实例，如果不是，那么会创建新的实例并返回
                例如:
                    function Person(name,age,job){
                        if(this instanceof Person){
                            this.name=name
                            this.age=age
                            this.job=job
                        }else{
                            return new Person(name,age,job)
                        }
                    }
        3.惰性载入函数
                函数执行分支只发生一次
                判断之后，将函数赋给变量，而不是在函数内判断
        4.函数绑定
                使用闭包，这样this就是指向函数的直接调用者，而非元素
                function bind(fn,context){
                    return function(){
                        return fn.apply(context,arguments)
                    }
                }
                但是会导致调试理解困难
                bind()函数
                bind(fn,context);为函数指定域
                ECMAScript5为所用函数定义了一个bind()方法，在函数上调用这个方法即可
                如fn.bind(context)
        5.函数柯里化
            用于创建已经设置好了一个或多个参数的函数
            基本方法和函数绑定是一样的:使用一个闭包返回一个函数
            区别是，当函数被调用时返回的函数还需要设置一些传入入的参数        
                    function add(num1,num2){
                        return num1+num2
                    }
                    function curriedAdd(num2){
                        return add(5,num2)
                    }
                    
                    柯里化函数通常由以下步骤动态创建：
                        function curry(fn){
                            var args=Array.prototype.slice.call(arguments,1)
                            return function(){
                                var innerArgs=Array.prototypr.slice.call(arguments);
                                var finalArgs=args.concat(innerArgs)
                                return fn.applay(null,finalArgs)
                            }
                        }
            
#### 防篡改对象
        
#### 高级定时器
#### 自定义事件
#### 拖放