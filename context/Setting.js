import { createContext, Fragment } from "react";
import useSWR from "swr";

import { SETTINGS } from "../helpers/api";

export const Context = createContext({});

const Setting = ({ children }) => {
	const { data, error } = useSWR(SETTINGS);

    // console.log(data)

    if (error) {
        return "Error"
    }
    return (
        <Fragment>
            {data !== undefined && <Context.Provider value={{...data}}>{children}</Context.Provider>}
        </Fragment>
    )
};


export default Setting;