"use strict";

class Foo {
  constructor(name = "") {
    this.name = name;
  }

  hello() {
    return `hello, ${this.name}!`;
  }
}

export default Foo;
