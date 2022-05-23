import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  login: false,
  user: {}
};
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'login':
      return{
        login: true,
        user: payload
      }
    case 'logot':
      return{
        login: false,
        user: {}
      }
    default:
      throw new Error()
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}