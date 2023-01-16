import "../styles/globals.css";
import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer/useReducer";

// context-api
export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
