class CaseConverter {
  static camelToUpperCamel(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
  }

  static snakeToCamel(s) {
    return s.replace(/-\w/g, m => {
      return m[1].toUpperCase();
    });
  }

  static snakeToUpperCamel(s) {
    return this.camelToUpperCamel(this.snakeToCamel(s));
  }

  static underscoreToCamel(s) {
    return s.replace(/_\w/g, m => {
      return m[1].toUpperCase();
    });
  }

  static underscoreToUpperCamel(s) {
    return this.camelToUpperCamel(this.underscoreToCamel(s));
  }
}

export default CaseConverter;
