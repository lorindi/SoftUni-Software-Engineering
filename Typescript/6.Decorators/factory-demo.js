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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
let Employee = (() => {
    let _tasks_decorators;
    let _tasks_initializers = [];
    let _tasks_extraInitializers = [];
    let _extraTasks_decorators;
    let _extraTasks_initializers = [];
    let _extraTasks_extraInitializers = [];
    return class Employee {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _tasks_decorators = [withTask({ name: "Task - 1", level: "mediun" })];
            _extraTasks_decorators = [withComplicatedTask()];
            __esDecorate(null, null, _tasks_decorators, { kind: "field", name: "tasks", static: false, private: false, access: { has: obj => "tasks" in obj, get: obj => obj.tasks, set: (obj, value) => { obj.tasks = value; } }, metadata: _metadata }, _tasks_initializers, _tasks_extraInitializers);
            __esDecorate(null, null, _extraTasks_decorators, { kind: "field", name: "extraTasks", static: false, private: false, access: { has: obj => "extraTasks" in obj, get: obj => obj.extraTasks, set: (obj, value) => { obj.extraTasks = value; } }, metadata: _metadata }, _extraTasks_initializers, _extraTasks_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        tasks = __runInitializers(this, _tasks_initializers, []);
        extraTasks = (__runInitializers(this, _tasks_extraInitializers), __runInitializers(this, _extraTasks_initializers, []));
        constructor() {
            __runInitializers(this, _extraTasks_extraInitializers);
        }
    };
})();
const employee = new Employee();
console.log(employee);
// Decorator's scope
function withTask(inputTask) {
    // Filed's scp[e]
    return function (target, context) {
        return function (fieldValue) {
            fieldValue.push(inputTask);
            return fieldValue;
        };
    };
}
function withComplicatedTask() {
    // logic
    return withTask({ name: "Task - 0", level: "hard" });
}
