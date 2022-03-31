export const color = (category) => {
  if (category.toLowerCase() === "tech") {
    return { backgroundColor: "#0C6291" };
  }
  if (category.toLowerCase() === "food") {
    return { backgroundColor: "#EA9010" };
  }
  if (category.toLowerCase() === "lifestyle") {
    return { backgroundColor: "#8CB369" };
  }
};
