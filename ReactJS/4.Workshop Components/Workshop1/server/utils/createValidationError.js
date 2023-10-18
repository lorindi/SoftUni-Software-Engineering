class ValidationError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'CustomValidationError';
    this.code = code || 400;
  }
}

module.exports = { ValidationError };
