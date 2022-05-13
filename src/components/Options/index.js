import React, {useContext} from 'react';

import Context from '../../context';
import classes from './styles.module.css';

const Options = (props) => {
    const ctx = useContext(Context);
    return (
        <div className={classes.container}>
            Options table
            <form>
                <fieldset>
                    <legend>How much time did you waste in your life? Let's find out!</legend>
                    <div class="inside">

                        What year were you born? <select name="year" id="year"></select>
                        Gender: <select name="gender" id="gender">
                            <option value="man" selected>male</option>
                            <option value="woman">female</option>
                        </select>
                        <button class="submit">Motivate me!</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Options;
