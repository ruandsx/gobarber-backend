function sum(a: number, b: number): number {
  return a - b;
}

test('sum two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
