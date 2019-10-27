class SingletonExample {
    constructor() {
    }
    static getInstance() {
        if (!SingletonExample.instance) {
            SingletonExample.instance = new SingletonExample();
        }
        return SingletonExample.instance;
    }
    logData() {
        console.log('Singleton class');
    }
}
let obj2 = SingletonExample.getInstance();
obj2.logData();
//# sourceMappingURL=singleton.js.map