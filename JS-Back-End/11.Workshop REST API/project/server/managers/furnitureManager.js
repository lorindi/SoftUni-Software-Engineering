const Furniture = require("../models/Furniture");

exports.getAll = async (qs) => {
  let query = Furniture.find();
  const where = qs.where;
  if (where) {
    const [fieldName, ownerId] = where.split("=");
    ownerId = ownerId.replaceAll('"', "");
    query = query.where("_ownerId").eq(ownerId);
  }
  const result = await query

  return result;
};

exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.create = (furnitureData) => Furniture.create(furnitureData);

exports.update = (furnitureId, furnitureData) => {
  Furniture.findByIdAndUpdate(furnitureId, furnitureData);
};

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);
