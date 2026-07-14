import { describe, it, expect } from "vitest";
import { coreVersion } from "./index";

describe("stellar-core", () => {
  it("exports version", () => {
    expect(coreVersion).toBe("0.1.0");
  });
});
