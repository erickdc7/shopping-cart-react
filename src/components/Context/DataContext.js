import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data))
    }, [])

    return (
        <dataContext.Provider>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider