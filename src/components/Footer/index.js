import React from 'react';

import classes from './styles.module.css';

const Footer = (props) => {

    return (
        <footer className={classes.footer}>
            <p>Data: <a href="https://www.worldbank.org" target="_blank" rel='noreferrer'>World Bank</a></p>
            <p>Source code: <a href="https://github.com/ThorgalAegirsson/Procrastinator-motivator-react" target="_blank" rel='noreferrer'>Github</a></p>
            <p>&copy; 2022 <a href="https://room33.dev" target='_blank' rel='noreferrer'>Room33</a></p>
        </footer>
    );
};

export default Footer;