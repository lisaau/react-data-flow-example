/**
 * Makes a copy of an array.
 * The copy has the element at provided index
 * replaced by newElement.
 *
 * const original = [1,2,3]
 * replaceElement(original, 1, 99)
 * // => [1, 99, 3]
 * // original still is [1,2,3]
 *
 * replaceElement
 * @param {Array} arr
 * @param {Number} index
 * @param {Object} newElement
 * @returns {Array} new array
 */
export function replaceElement(arr, index, newElement) {
  return [...arr.slice(0, index), newElement, ...arr.slice(index + 1)];
}

/**
 * const obj = { a: true, b: 12 }
 * const copy = updatedCopy(obj, a, false)
 * // => { a: false, b: 12 }
 * // obj still = { a: true, b: 12 }
 *
 * @param {Object} object
 * @param {String} propName
 * @param {*} newValue
 */
export function updatedCopy(object, propName, newValue) {
  return {
    ...object,
    [propName]: newValue
  };
}
