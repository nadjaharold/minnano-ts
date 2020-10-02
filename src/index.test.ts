import { sum } from "./index";

test("basic", () => {
  expect(sum()).toBe(10);
});

test("basic again", () => {
  expect(sum(1, 2)).toBe(13);
});
