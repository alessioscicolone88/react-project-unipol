import { areAllPropertiesNotNullOrEmpty } from "./object.utils";

describe("ObjectUtil", () => {
  describe("areAllPropertiesNotNullOrEmpty", () => {
    it("test results function true", () => {
      const result = areAllPropertiesNotNullOrEmpty({});

      expect(result).toBeTruthy();
    });

    it("should return true if all properties are not null or empty", () => {
      const inputObject = {
        prop1: "some value",
        prop2: 123,
        prop3: true,
        prop4: "another value",
      };

      const result = areAllPropertiesNotNullOrEmpty(inputObject);

      expect(result).toBe(true);
    });

    it("should return false if at least one property is null or empty", () => {
      const inputObject = {
        prop1: "some value",
        prop2: 123,
        prop3: true,
        prop4: "",
      };

      const result = areAllPropertiesNotNullOrEmpty(inputObject);

      expect(result).toBe(false);
    });

    it("should handle null and undefined values properly", () => {
      const inputObject = {
        prop1: "some value",
        prop2: 123,
        prop3: null,
        prop4: undefined,
      };

      const result = areAllPropertiesNotNullOrEmpty(inputObject);

      expect(result).toBe(false);
    });
  });
});
