import { Children, createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ Children }) => {
    const [data, setData] = useState()

    // fetching all products from Api
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get() 
        }  catch (error) {
            console.log(error)
        }
    }
    return <DataContext.Provider value = {{data, setData}}>
        {Children}
    </DataContext.Provider>    
}