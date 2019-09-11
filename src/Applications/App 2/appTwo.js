import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './appTwo.css';
import { WEEKDAYS, MONTHS } from './week.dataset';

const AppTwo = () => {
    const initialTime = {
        hours: null,
        minutes: null,
        seconds: null
    }

    const initialToday = {
        day: null,
        date: null,
        month: null,
        year: null
    }
    const [today, setToday] = useState(initialToday);
    const [time, setTime] = useState(initialTime);
    const [calendarOpen, setCalendarOpen] = useState(false);

    setInterval(() => {
        const date = new Date();
        setTime({ hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds() });
        setToday({ day: date.getDay(), date: date.getDate(), month: date.getMonth(), year: date.getFullYear() });
    }, 1);

    const toggleCalendar = () => {
        setCalendarOpen(!calendarOpen);
    }

    return (
        <div className='apptwo-application-container'>
            <Card>
                <CardContent className='appTwo-card-content'>
                    <h1 className='appTwo-time'>{time.hours < 10 ? '0' + time.hours : time.hours} : {time.minutes < 10 ? '0' + time.minutes : time.minutes} : {time.seconds < 10 ? '0' + time.seconds : time.seconds}</h1>
                    {calendarOpen ? (<p className='appTwo-date'> {WEEKDAYS[today.day]}  {today.date}  {MONTHS[today.month]}  {today.year}</p>) : (null)}
                </CardContent>
                <CardActions>
                    <Button className='appTwo-toggler' size="small" onClick={toggleCalendar}>Toggle Calendar</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default AppTwo;