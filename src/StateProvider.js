import React, { createContext, useContext, useReducer } from 'react';

// PREPARING THE DATA LAYER
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) =>
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>


// HOOK WHICH ALLOWS US TO PULL INFORMATION FROM THE DATA LAYER
export const useStateValue = () => useContext(StateContext); 