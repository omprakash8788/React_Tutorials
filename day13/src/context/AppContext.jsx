import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const intialState = {
  count: 0,
  todos: [],
};

const appReducerFn = (state, { type, payload }) => {
  switch (type) {
    case "INC": {
      return {
        ...state,
        count: state.count + (payload || 1),
      };
    }
    case "DEC": {
      return {
        ...state,
        count: state.count - (payload || 1),
      };
    }
    default: {
      return state;
    }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducerFn, intialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
