import { checkCardIdentity } from "../js/cardIdentity";

test("should return visa", () => {
  const result = checkCardIdentity("4111111111111111");

  expect(result).toBe(".visa");
});

test("should return master-card", () => {
  const result = checkCardIdentity("5555555555554444");

  expect(result).toBe(".master-card");
});

test("should return jcb", () => {
  const result = checkCardIdentity("3530111333300000");

  expect(result).toBe(".jcb");
});

test("should return discover", () => {
  const result = checkCardIdentity("6011111111111117");

  expect(result).toBe(".discover");
});

test("should return diners", () => {
  const result = checkCardIdentity("30569309025904");

  expect(result).toBe(".diners");
});

test("should return american-express", () => {
  const result = checkCardIdentity("371449635398431");

  expect(result).toBe(".american-express");
});

test("should return mir", () => {
  const result = checkCardIdentity("2202206175984659");

  expect(result).toBe(".mir");
});
