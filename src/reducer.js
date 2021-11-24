const reducer = (state, action) => {
  switch (action.type) {
    case "RESIZE":
      return { ...state, justIcons: action.payload };
    case `HANDLE_MOBILE`:
      return { ...state, mobileDevice: action.payload };
    case `HANDLE_BACKGROUND`:
      return { ...state, theme: action.payload };
    case "HANDLE_BUTTON_THEME":
      return { ...state, buttonTheme: action.payload };
    case `HANDLE_MODAL`:
      return { ...state, isContactModalOpen: action.payload };
    default:
      return state;
  }
};

export default reducer;
