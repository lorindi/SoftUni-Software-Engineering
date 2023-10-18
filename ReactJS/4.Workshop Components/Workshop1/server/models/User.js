const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, 'First name should be at least 3 characters long!'],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, 'Last name should be at least 3 characters long!'],
    },
    email: {
      type: String,
      required: true,
      match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
    },
    imageUrl: {
      type: String,
      required: true,
      match: [/^https?:\/\/.+/, 'ImageUrl is not valid!'],
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^0[1-9]{1}[0-9]{8}$/, 'Phone number is not valid!'],
    },
    address: {
      country: {
        type: String,
        required: true,
        minLength: [2, 'Country should be at least 2 characters long!'],
      },
      city: {
        type: String,
        required: true,
        minLength: [3, 'City should be at least 3 characters long!'],
      },
      street: {
        type: String,
        required: true,
        minLength: [3, 'Street should be at least 3 characters long!'],
      },
      streetNumber: {
        type: Number,
        required: true,
        min: [1, 'Street number should be a positive number!'],
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = model('User', userSchema);
module.exports = {
  userModel,
};
