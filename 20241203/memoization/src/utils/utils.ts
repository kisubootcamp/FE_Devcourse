export const initialItems = new Array(29_999_999)
  .fill(0)
  .map((_, i) => ({ id: i, selected: i === 29_999_998 }));
