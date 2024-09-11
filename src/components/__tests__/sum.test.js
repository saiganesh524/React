import { sum } from "../sum";

test("sum fn should calc the sum of two numbers", () => {
  // Assertion
  expect(sum(5, 10)).toBe(15);
  expect(sum(0, 0)).toBe(0);
  expect(sum(-5, 5)).toBe(0);
  expect(sum(1.5, 2.5)).toBe(4);
  expect(sum(10, -5)).toBe(5);
});
