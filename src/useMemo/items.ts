export const ITEMS = new Array(50_000000).fill(0).map((_, index) => {
  return {
    id: index + 1,
    isSelected: index === 59_999_999,
  };
});