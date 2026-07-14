import { describe, it, expect } from "vitest";
import { engineVersion } from "./index";

describe("fx-engine", () => {
  it("exports version", () => {
    expect(engineVersion).toBe("0.1.0");
  });
});
