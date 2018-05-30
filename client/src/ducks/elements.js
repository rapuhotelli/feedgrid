export const loadState = status => {
  return {
    type: `GENERIC_LOADER_${status}`
  };
};
