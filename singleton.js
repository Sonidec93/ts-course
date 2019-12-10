class SingletonExample {
    constructor() {
    }
    static getInstance() {
        if (!SingletonExample.instance) {
            SingletonExample.instance = new SingletonExample();
        }
        //in static method this refer to the class itself using this we can access class variables
        return this.instance;
    }
    logData() {
        console.log('Singleton class');
    }
}
let obj2 = SingletonExample.getInstance();
obj2.logData();
//# sourceMappingURL=singleton.js.map