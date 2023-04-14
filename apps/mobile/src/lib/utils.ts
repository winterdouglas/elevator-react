export const range = (start: number, end: number) => {
  const amount = Math.abs(end - start) + 1;
  return [...Array(amount).keys()].map((i) =>
    start < end ? i + start : start - i
  );
};

type WithProperty<T> = { [K in keyof T]: T[K] };

export const removeBy = <T extends WithProperty<T>>(
  array: readonly T[],
  property: keyof T,
  value: T[keyof T]
): T[] => {
  return array.filter((obj) => obj[property] !== value);
};

export const sortBy = <T extends WithProperty<T>>(
  array: readonly T[],
  property: keyof T,
  direction: "ascending" | "descending" = "ascending"
): T[] => {
  return [...array].sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];

    if (aValue < bValue) {
      return direction === "ascending" ? -1 : 1;
    } else if (aValue > bValue) {
      return direction === "ascending" ? 1 : -1;
    } else {
      return 0;
    }
  });
};
