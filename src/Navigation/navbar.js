import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                <Link to='/clickCounter'><Tab label='Click Counter' /></Link>
                <Link to='/clock'><Tab label='Clock' /></Link>
                <Link to='/timer'><Tab label='Timer' /></Link>
                <Link to='/advancedTimer'><Tab label='Advanced Timer' /></Link>
                <Link to='/moviecards'> <Tab label='Movie Cards' /></Link >
                <Link to='/masterminds'><Tab label='React Masterminds' /></Link>
                <Link to='/calculator'><Tab label='Calculator' /></Link>
                <Link to='weather'><Tab label='weather' /></Link >
            </Tabs >
        </div >
    )
}

export default Navbar;