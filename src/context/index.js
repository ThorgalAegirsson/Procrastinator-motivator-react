import React, { useState } from 'react';


const Context = React.createContext({
    year: '',
    sex: '',
    lifetime: null,
    lifeLeft: null,
    life: null,
    timePassed: null,
    setYear: () => { },
    setSex: () => { },
    fetchData: () => { }
});

const formatTime = (lifetime) => {
    const years = Math.floor(lifetime);
    const extraWeeks = lifetime - years;
    const weeks = Math.round(extraWeeks * 52);
    let textOutput = `${years} years`;
    if (weeks) textOutput += ` ${weeks} weeks`;
    return textOutput;
};

export const ContextProvider = props => {
    const [year, setYear] = useState('');
    const [sex, setSex] = useState('');
    const [lifetime, setLifetime] = useState(null);
    const [lifeLeft, setLifeLeft] = useState(null);
    const [timePassed, setTimePassed] = useState(null);
    const [life, setLife] = useState(null);

    const fetchData = ({ sex, year }) => {
        sex = sex || 'man';
        year = year || new Date().getFullYear() - 2;
        console.log(year, sex);
        const maleStr = `SP.DYN.LE00.MA.IN`;
        const femaleStr = `SP.DYN.LE00.FE.IN`;
        const rootURL = `https://api.worldbank.org/v2/countries/POL/indicators/${sex === 'man' ? maleStr : femaleStr}?date=${year}:${year}&format=json`;
        console.log(rootURL)
        try {
            fetch(rootURL)
                .then(
                    res => res.json(),
                    err => console.error(err)
                )
                .then(
                    json => {
                        const life = json[1][0].value;
                        const today = new Date().getFullYear();
                        let timePassed = today - year;
                        if (!life) {
                            timePassed = 0;
                        }
                        setLifetime(formatTime(life));
                        setTimePassed(timePassed);
                        setLifeLeft(formatTime(life - timePassed));
                        setLife(life);
                    }
                );

        } catch (error) {
            console.error(error);
        }
    };

    const contextValue = {
        year,
        setYear,
        sex,
        setSex,
        lifetime,
        lifeLeft,
        timePassed,
        life,
        fetchData
    };

    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>
}

export default Context;