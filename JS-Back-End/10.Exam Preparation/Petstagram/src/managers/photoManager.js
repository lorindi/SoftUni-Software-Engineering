const Photo = require("../models/Photo");

exports.getAll = () => Photo.find();

exports.create = (photoData) => Photo.create(photoData);
