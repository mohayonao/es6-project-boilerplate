"use strict";

import Foo from "./foo";

class Bar extends Foo {
  constructor(name) {
    super(name);
  }

  hello() {
    return super.hello() + "?";
  }
}

export default Bar;
