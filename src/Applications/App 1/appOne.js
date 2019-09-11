import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import { Add, Remove, Refresh } from '@material-ui/icons';
import './appOne.css';
const AppOne = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const subtract = () => {
        if (count <= 0) return;
        setCount(count - 1);
    }

    const refresh = () => {
        setCount(0);
    }

    return (
        <div className='application-container'>
            <div className='application'>
                <div className='screen'>
                    <h1>{count}</h1>
                </div>
                <div className="buttons">
                    <Fab color="primary" className="refresh" onClick={add}><Add /></Fab>
                    <Fab className='add' onClick={refresh}><Refresh /></Fab>
                    <Fab color="secondary" className="subtract" onClick={subtract}><Remove /></Fab>
                </div>
            </div>
        </div>
    )
}

export default AppOne; 