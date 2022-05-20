import React from 'react';

import classes from './styles.module.css';

const Week = (props) => {
    let pastWeek;
    if (props.past) pastWeek = classes.pastWeek;
    return (
        <div className={classes.week}>
            <div className={pastWeek}></div>
        </div>
    );
};

export default Week;