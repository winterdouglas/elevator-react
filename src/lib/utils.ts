export const range = (start: number, end: number) => {
  const amount = Math.abs(end - start) + 1;
  return [...Array(amount).keys()].map((i) =>
    start < end ? i + start : start - i
  );
};

export const ascending = (a: number, b: number) => a - b;

export const descending = (a: number, b: number) => b - a;
