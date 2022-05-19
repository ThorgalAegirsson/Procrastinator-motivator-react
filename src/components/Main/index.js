import React, {useContext} from 'react';

import Dashboard from '../Dashboard';
import Output from '../Output';
import Context from '../../context';

import classes from './styles.module.css';

const Main = (props) => {
    const ctx = useContext(Context);
    console.log(ctx.lifetime)
    return (
            <main className={classes.container}>
                <Dashboard />
                {ctx.lifetime && <Output />}
            </main>
    );
};

export default Main;