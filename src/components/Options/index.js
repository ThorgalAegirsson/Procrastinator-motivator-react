import React, { useContext } from 'react';

import Context from '../../context';
import classes from './styles.module.css';

const Options = (props) => {
    const ctx = useContext(Context);
    const year = ctx.year;
    const sex = ctx.sex;
    const yearsList = () => {
        const years = [];
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        for (let year = currentYear-1; year > 1950; year--) {
            const option = <option value={year} key={year}>{year}</option>;
            years.push(option);
        }
        return years;
    };

    const submitData = e => {
        e.preventDefault();
        ctx.fetchData({sex, year});
    }
    return (
        <div className={classes.container}>
            <form onSubmit={submitData}>
                <fieldset>
                    <legend>How much time did you waste in your life? Let's find out!</legend>
                    <div className={classes.options}>

                        What year were you born?
                        <select name='year' id='year' value={ctx.year} onChange={e=>ctx.setYear(e.target.value)}>{yearsList()}</select>
                        Sex:
                        <select name="gender" id="gender" value={ctx.sex} onChange={e=>ctx.setSex(e.target.value)}>
                            <option value="man" defaultValue='man'>male</option>
                            <option value="woman">female</option>
                        </select>
                        <button className={classes.button}>Motivate me!</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Options;
