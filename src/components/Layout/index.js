import React from 'react';

import { ContextProvider } from '../../context';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

import classes from './styles.module.css';

const Layout = (props) => {
    
    return (
        <ContextProvider>
        <div className={classes.container}>
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
            </div>
        </ContextProvider>
    );
};

export default Layout;