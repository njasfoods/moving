'use client'
import Cookies from "js-cookie";
import { createContext, useContext, useReducer } from "react";


export const FormContext = createContext();

const initialState = {
  userInfo: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo")) : null,
  
};

function reducer(state, action) {
  switch (action.type) {


    case "SAVE_USER_INFO": {
      const newUserInfo = action.payload;
      Cookies.set("userInfo", JSON.stringify(newUserInfo));
      return {
        ...state,
       userInfo: newUserInfo
      };
    }

    default:
      return state;
  }
}

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export const useFormContext = () => {
    return useContext(FormContext);
  };