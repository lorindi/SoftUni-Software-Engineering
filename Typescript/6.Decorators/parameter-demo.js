var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
let Animal = (() => {
    let _instanceExtraInitializers = [];
    let _eat_decorators;
    return class Animal {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _eat_decorators = [validateParams];
            __esDecorate(this, null, _eat_decorators, { kind: "method", name: "eat", static: false, private: false, access: { has: obj => "eat" in obj, get: obj => obj.eat }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        eat(arg1, arg2) {
            console.log(`Received params: ${arg1}, ${arg2}`);
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
// Decorator's scope
function validateParams(target, context) {
    // Function's scope
    return function (...args) {
        for (let i = 0; i < args.length; i++) {
            const currentArg = args[i];
            if (currentArg === undefined || currentArg === null) {
                throw new Error(`Parameter at index ${i} is invalid! Parameter: ${currentArg}`);
            }
        }
        if (args.length < 2) {
            throw new Error(`Parameters must be 2!`);
        }
        target.apply(this, args);
    };
}
const animal = new Animal();
animal.eat("Veggie", 123); // ['Veggie']
