const __ = require('underscore')
class Feature {
  constructor(type, maxResults) {
    const options = __.isObject(type) ? type : {
      type: type,
      maxResults: maxResults
    }
    this._type = options.type
    this._maxResults = options.maxResults || 10
  }
  build() {
    return {
      type: this.__type,
      maxResults: this.__maxResults
    }
  }
}
module.exports = Feature