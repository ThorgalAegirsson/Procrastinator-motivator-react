import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

import classes from './styles.module.css';

const Layout = (props) => {
    
    return (
        <div className={classes.container}>
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </div>
    );
};

export default Layout;