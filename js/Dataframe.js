class Dataframe {
  constructor(columns, data) {
    this.columns = columns;
    this.data = data;
  }

  static lte(lv, rv) {
    return lv <= rv
  }

  static lt(lv, rv) {
    return lv < rv
  }

  static gte(lv, rv) {
    return lv >= rv
  }

  static gt(lv, rv) {
    return lv > rv
  }

  static eq(lv, rv) {
    return lv == rv
  }

  static neq(lv, rv) {
    return lv != rv
  }

  static strIn(lv, rv) {
    return rv.includes(lv)
  }

  static strNIn(lv, rv) {
    return !rv.includes(lv)
  }
}
