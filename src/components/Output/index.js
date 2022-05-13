import React from 'react';

import Chart from '../Chart';

import classes from './styles.module.css';

const Output = (props) => {

    return (
        <div className={classes.container}>
            <hr />
            <p>
                Your estimated lifetime is: <span class="lifetime">{props.lifetime}</span>. Statistically you still have <span class="lifeLeft">{props.lifeLeft}</span> left.
            </p>
            <p>Every box below is a week, black box is the past, light box is your future. Use it wisely.</p>
            <Chart />
        </div>
    );
};

export default Output;