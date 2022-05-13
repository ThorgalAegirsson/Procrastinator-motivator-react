import React, { useState } from 'react';


const Context = React.createContext({
    year: '',
    sex: '',
    fetchData: () => { }
});


export const ContextProvider = props => {
    const [year, setYear] = useState('');
    const [sex, setSex] = useState('');
    
    const contextValue = {
        year,
        sex
    };

    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>
}

export default Context;