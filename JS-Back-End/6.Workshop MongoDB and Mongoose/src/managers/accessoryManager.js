const Accessory = require("../models/Accessory");
exports.getAll = () => Accessory.find();
exports.create = (accessoryData) => Accessory.create(accessoryData);
