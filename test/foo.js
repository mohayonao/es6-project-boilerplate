"use strict";

import assert from "power-assert";
import Foo from "../src/foo";

describe("Foo", () => {
  describe("constructor", () => {
    it("(name: string)", () => {
      var foo = new Foo("paul");

      assert(foo instanceof Foo);
      assert(foo.name === "paul");
    });
  });
  describe("#hello", () => {
    it("(): string", () => {
      var foo = new Foo("john");

      assert(foo.hello() === "hello, john!");
    });
  });
});
