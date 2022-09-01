/*
 观察者模式
 是对一个目标数据进行观察，目标数据知道观察者的存在，目标选择在合适的时候触发执行所有的观察者
 1. 观察者：当触发时，要执行的逻辑，具体要做的事情 update
 2. 目标： 存在 subs数组存储观察者，addSub 添加观察者，notify 当事件发生时调用所有观察者的要执行的处理逻辑
 没有事件中心，核心通过目标进行记录观察者和调用观察者
 */

const EventEmitter = require('events');

class Dep {
  constructor() {
    /**
     * @type Watch[]
     */
    this.subs = [];
  }
  /**
   *
   * @param {Watch} sub
   */
  addSub(sub) {
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach((sub) => sub.update());
  }
}

class Watch {
  update() {
    console.log('更新');
  }
}

const dep = new Dep();
const watch = new Watch();

dep.addSub(watch);

dep.notify();

/*
    发布/订阅模式
    1. 事件中心：记录事件的订阅者，收到发布事件后，通知订阅者的执行
    2. 发布者，发布触发事件中心，对相应事件进行处理，通知到订阅者
    2. 订阅者，订阅某个事件的监听
 */

const evt = new EventEmitter();
evt.on('hello', () => {
  console.log('hello');
});
evt.emit('hello');

/*
 总结：
 观察者模式，目标发布者完成对观察者的收集，然后在合适的时候进行触发，观察者与目标是一一绑定的，利于单独数据的管理，
 比如vue2中的数据依赖数据与触发，存在依赖关系，发布者知道对方的存在
 发布/订阅模式, 发布者只负责发布事件，订阅者只负责订阅事件，由事件中心接受到发布时触发相应事件订阅者的执行，
 利于多种不同任务事件的管理 ，发布者不知道订阅者的存在
 */
