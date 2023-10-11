function flatten(elements) {
    const result = [];
    for (let i = 0; i < elements.length; i++) {
      if (Array.isArray(elements[i])) {
        result.push(...flatten(elements[i]));
      } else {
        result.push(elements[i]);
      }
    }
    return result;
  }
  
  module.exports = flatten;
  