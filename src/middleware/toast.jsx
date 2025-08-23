const toast = () => (next) => (action) => {
  if (action.type === "error") console.log("Toastify", action.payload.message);
  else
  {
    //  console.log("Toastify Toast..........", action);
    next(action);
  }
};
export default toast;
