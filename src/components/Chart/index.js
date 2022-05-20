import React, { useContext } from 'react';

import Context from '../../context';
import Week from './Week';

import classes from './styles.module.css';

const Chart = (props) => {
    const ctx = useContext(Context);
    const { life, timePassed } = ctx;
    console.log(life)
    const weeks = Math.round(life * 52);
    const pastWeeks = Math.round(timePassed * 52);

    return (
        <div className={classes.chart}>
            {[...Array(weeks)].map((week, index) => {
                let past=false;
                if (index < pastWeeks - 1) past=true;
                return <Week past={past} key={index} />
            })}
        </div>
    );
};

export default Chart;