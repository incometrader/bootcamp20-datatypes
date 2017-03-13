const dataTypes = (arg) => {
  if (Array.isArray(arg)) {
    return arg[2];
  }
  if (typeof arg === 'object' || typeof arg === 'undefined') {
    return 'no value';
  }
  if (typeof arg === 'string') {
    return arg.length;
  }
  if (typeof arg === 'boolean') {
    return arg;
  }
  if (typeof arg === 'function') {
    return arg(true);
  }
  if (typeof arg === 'number') {
    if (arg > 100) {
      return 'more than 100';
    } else if (arg < 100) {
      return 'less than 100';
    } else if (arg === 100) {
      return 'equal to 100';
    }
  }
  return 'dataType not found';
};
module.exports = dataTypes;
