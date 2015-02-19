"use strict";

import assert from "power-assert";
import index from "../src";

describe("index", () => {
  describe("Foo", () => {
    it("getter: function", () => {
      assert(typeof index.Foo === "function");
    });
  });
  describe("Bar", () => {
    it("getter: function", () => {
      assert(typeof index.Bar === "function");
    });
  });
});
