import React, { useContext } from 'react';

import Context from '../../context';
import Chart from '../Chart';

import classes from './styles.module.css';

const Output = (props) => {
    const ctx = useContext(Context);

    return (
        <div className={classes.container}>
            <hr />
            <p>
                Your estimated lifetime is <span className={classes.lifetime}>{ctx.lifetime}</span>. Statistically you still have <span className={classes.lifeLeft}>{ctx.lifeLeft}</span> left. Use it wisely.
            </p>
            <p>Every box below is a week, black box is the past, light box is your future. </p>
            <Chart />
        </div>
    );
};

export default Output;