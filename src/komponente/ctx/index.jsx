import React, {createContext,useState} from 'react'

export const NavCtx = createContext();

export const ASprovider = props => {
    const [mobNav, setmobNav] = useState(false);
    return (
        <NavCtx.Provider value={[mobNav, setmobNav]}>
            {props.children}
        </NavCtx.Provider>
    )
}