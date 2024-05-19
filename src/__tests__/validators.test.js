import { isValidCard } from "../js/validators";

test("should return false", () => {
  const result = isValidCard("0000055555");

  expect(result).toBe(false);
});

test("should return true", () => {
  const result = isValidCard("30569309025904");

  expect(result).toBe(true);
});
