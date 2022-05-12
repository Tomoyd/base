class EventBus {
  static instance = null;
  constructor() {
    if (EventBus.instance) {
      return EventBus.instance;
    }
    this.cacheMap = {};
    EventBus.instance = this;
  }

  getListeners(eventName) {
    return this.cacheMap[eventName] || [];
  }

  on(eventName, listener) {
    if (!this.cacheMap[eventName]) {
      this.cacheMap[eventName] = [];
    }
    this.cacheMap[eventName].push(listener);
    return () => {
      this.off(eventName, listener);
    };
  }

  off(eventName, fn) {
    const fns = this.getListeners(eventName);
    this.cacheMap = fns.filter((f) => f !== fn);
  }

  emit(eventName, data) {
    const fns = this.getListeners(eventName);
    fns.forEach((f) => {
      f(data);
    });
  }
}

const eventBus = new EventBus();
const dispose = eventBus.on('test', (data) => {
  console.log('test', data);
});

eventBus.emit('test', 'hello bus');
// dispose();

eventBus.emit('test', 'hello bus2');

const eventBus2 = new EventBus();

eventBus2.emit('test', 'hello instance');
