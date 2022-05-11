import React from 'react';

import Footer from '../Footer';

import classes from './styles.module.css';

const Layout = (props) => {
    
    return (
        <div className={classes.container}>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;