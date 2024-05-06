export const isClientSide = () => {
  return typeof window !== "undefined";
};

export const isServerSide = () => {
  return !isClientSide();
};
