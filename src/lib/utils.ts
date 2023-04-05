export const range = (start: number, end: number) => {
  const amount = Math.abs(end - start) + 1;
  return [...Array(amount).keys()].map((i) =>
    start < end ? i + start : start - i
  );
};

export const closest = (array: number[], target: number) => {
  return array.reduceRight((closest, current) => {
    if (
      closest === undefined ||
      Math.abs(current - target) < Math.abs(closest - target)
    ) {
      closest = current;
    }
    return closest;
  }, undefined as number | undefined);
};

export const remove = (array: number[], target: number) => {
  return array.filter((a) => a !== target);
};

export const ascending = (a: number, b: number) => a - b;

export const descending = (a: number, b: number) => b - a;
