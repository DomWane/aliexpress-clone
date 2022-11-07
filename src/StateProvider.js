import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

//App wrap and data provide
export const StateProvider = ({ reducer , initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Info pull 
export const useStateValue = () => useContext(StateContext)