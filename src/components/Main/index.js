import React, {useContext} from 'react';

import Dashboard from '../Dashboard';
import Output from '../Output';
import Context, { ContextProvider } from '../../context';

import classes from './styles.module.css';

const Main = (props) => {
    const ctx = useContext(Context);
    return (
        <ContextProvider>
            <main className={classes.container}>
                <Dashboard />
                {ctx.year && <Output />}
            </main>
        </ContextProvider>
    );
};

export default Main;