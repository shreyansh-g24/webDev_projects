// JS

// declaring function to create and maintain store
function createStore(mainReducer, preloadedState = [], subscribe) {
  
  let store = preloadedState;

  function getState() {
    return store;
  }

  function dispatch(action) {
    store = mainReducer(store, action);
    return subscribe(store);
  }

  // returning getState and dispatch
  return {
    getState,
    dispatch,
  };
}
