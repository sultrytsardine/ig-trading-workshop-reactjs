export default (state = [], payload) => {
  switch (payload.type) {
    case "click":
      return [...state, payload.item];
    default:
      return state;
  }
};