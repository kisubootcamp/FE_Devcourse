export const initialItems = new Array(29_999_999).fill(0).map((__, i) => {
  return {
    id: i,
    slected: i === 29_999_998,
  };
});
