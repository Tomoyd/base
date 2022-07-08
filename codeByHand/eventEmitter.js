function EventEmitter() {
  this.listeners = {};
  this.maxListenersNumber = 10;
}

EventEmitter.prototype.on = function (eventName, listener) {
  this.listeners[eventName] = this.listeners[eventName] || [];
  if (this.listeners.length >= this.maxListenersNumber) {
    throw console.error('超出监听器最大数量%d', this.maxListenersNumber);
  }
  this.listeners[eventName].push(listener);
};

EventEmitter.prototype.emit = function (event) {
  var args = Array.prototype.slice.call(arguments, 1);
  var listeners = this.listeners[event] || [];

  listeners.forEach(function (listener) {
    listener.apply(null, args);
  });
};
EventEmitter.prototype.removeListener = function (event, fn) {
  var index = (this.listeners[event] || []).indexOf(fn);
  if (index > -1) {
    this.listeners.split(index, 1);
  }
};
EventEmitter.prototype.once = function (event, listener) {
  var self = this;

  function fn() {
    var args = Array.prototype.slice.call(arguments);
    listener.apply(null, args);
    self.removeListener(event, fn);
  }

  this.on(event, fn);
};

EventEmitter.prototype.removeAllListeners = function (event) {
  this.listeners[event] = [];
};

EventEmitter.prototype.setMaxListeners = function (num) {
  this.maxListenersNumber = num === undefined ? 10 : num;
};

EventEmitter.prototype.eventListeners = function (event) {
  return this.listeners[event] || [];
};
