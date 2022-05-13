import React from 'react';

import Options from '../Options';

import classes from './styles.module.css';

const Dashboard = (props) => {
    
    return (
        <div className={classes.container}>
            <h2>Hey procrastinators! Let's get motivated!</h2>
            <Options />
        </div>
    )
    ;
};

export default Dashboard;