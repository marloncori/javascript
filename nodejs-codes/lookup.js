
const _ = require("underscore")

/* Functions for turning sparse hashes into arrays and vice versa */
const buildLookup = (hashes) => {
  // [{a: 1}, {b: 6, c: 7}] -> {a: 0, b: 1, c: 2}
  const hash = _(hashes).reduce(function(memo, hash) {
    return _(memo).extend(hash)
  }, {})
  return lookupFromHash(hash)
}

const lookupFromHash = (hash) => {
  // {a: 6, b: 7} -> {a: 0, b: 1}
  let lookup = {}
  let index = 0;
  for (const i in hash) {
    lookup[i] = index++
  }
  return lookup
}

const toArray = (lookup, hash) => {
  // {a: 0, b: 1}, {a: 6} -> [6, 0]
  let array = []
  for(const i in lookup){
     array[lookup[i]] = hash[i] || 0
  }
  return array
}

const toHash = (lookup, array) => {
  // {a: 0, b: 1}, [6, 7] -> {a: 6, b: 7}
  let hash = {}
  for (const i in lookup) {
    hash[i] = array[lookup[i]]
  }
  return hash
}

const lookupFromArray = (array) => {
  let lookup = {}
  // super fast loop
  let z = 0
  let i = array.length
  while (i-- > 0) {
    lookup[array[i]] = z++
  }
  return lookup
}

module.exports = {
  buildLookup: buildLookup,
  lookupFromHash: lookupFromHash,
  toArray: toArray,
  toHash: toHash,
  lookupFromArray: lookupFromArray
}