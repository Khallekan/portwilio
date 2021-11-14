const reducer = (state, action) => {
  switch (action.type) {
    case "RESIZE":
      return { ...state, justIcons: action.payload };
    case `HANDLE_MOBILE`:
      return { ...state, mobileDevice: action.payload };
    default:
      return state;
  }
};

export default reducer;
