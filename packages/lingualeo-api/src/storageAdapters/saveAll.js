import * as R from 'ramda'

function saveAll(storage, data) {
  R.mapObjIndexed((v, k) => storage.set(k, v), data)
}

export default R.curryN(2, saveAll)
