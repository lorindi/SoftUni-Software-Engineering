function createErrorMessage(error) {
  return error.message.includes('Path')
    ? getMissingPropertiesErrorMessage(error?.errors || {})
    : Object.values(error.errors)[0]?.properties?.message;
}

function errorHandler(error, res, req) {
  let message = 'Something went wrong!';
  if (error.name === 'CustomValidationError') {
    message = error.message;
    res.status(error.code).json({ message });
  } else if (error instanceof TypeError || error.name == 'MongoError' || error.name == 'ObjectParameterError') {
    message = error?.message;
    res.status(500).json({ message });
  } else if (error.name === 'CastError') {
    message = error.message;
    res.status(500).json({ message });
  } else {
    message = createErrorMessage(error);
    res.status(400).json({ message });
  }
  console.error(`Error: ${req.method} >> ${req.baseUrl}: ${message}`);
}

function getMissingPropertiesErrorMessage(errors) {
  const missingProperties = Object.keys(errors).reduce((a, b) => {
    if (b.includes('.')) {
      const [mainProp, nestedProp] = b.split('.');
      return { ...a, ...{ [mainProp]: (a[mainProp] || []).concat([nestedProp]) } };
    }
    return { ...a, ...{ [b]: null } };
  }, {});

  const result = Object.keys(missingProperties)
    .map((x) => (Array.isArray(missingProperties[x]) ? `{ ${x}: { ${missingProperties[x].join(', ')} }` : x))
    .join(', ');

  return `Missing properties! You should send a request body like this example: { ${result} }`;
}

module.exports = {
  errorHandler,
};
