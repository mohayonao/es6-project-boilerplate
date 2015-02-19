"use strict";

import assert from "power-assert";
import Foo from "../src/foo";
import Bar from "../src/bar";

describe("Bar", () => {
  describe("constructor", () => {
    it("(name: string)", () => {
      var bar = new Bar("george");

      assert(bar instanceof Bar);
      assert(bar instanceof Foo);
      assert(bar.name === "george");
    });
  });
  describe("#hello", () => {
    it("(): string", () => {
      var bar = new Bar("ringo");

      assert(bar.hello() === "hello, ringo!?");
    });
  });
});
