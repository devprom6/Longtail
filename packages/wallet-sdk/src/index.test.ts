import { describe, it, expect } from "vitest";
import { sdkVersion } from "./index";

describe("wallet-sdk", () => {
  it("exports version", () => {
    expect(sdkVersion).toBe("0.1.0");
  });
});
