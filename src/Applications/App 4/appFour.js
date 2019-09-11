import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Time from './Time';
import './appFour.css';

class AppFour extends React.Component {
    constructor() {
        super();
        this.state = {
            hours: '0',
            minutes: '0',
            seconds: '0',
            milliseconds: '0',
            selectedElement: '',
            timerPaused: true,
            appStarted: false
        }

    }

    addValue = (val, selectedElement) => {
        if (selectedElement === 'hours') {
            this.setState(prevState => ({
                hours: this.state.hours === '0' ? val : (prevState.hours.length > 1 ? prevState.hours.substring(1, 2) + val : prevState.hours + val)
            }))
        } else if (selectedElement === 'minutes') {
            if (parseInt(this.state.minutes.substring(1, 2) + val) < 60) {
                this.setState(prevState => ({
                    minutes: prevState.minutes.length > 1 ? prevState.minutes.substring(1, 2) + val : prevState.minutes + val
                }))
            } else {
                this.setState({
                    minutes: 0 + val
                })
            }
        } else if (selectedElement === 'seconds') {
            if (parseInt(this.state.seconds.substring(1, 2) + val) < 60) {
                this.setState(prevState => ({
                    seconds: prevState.seconds.length > 1 ? prevState.seconds.substring(1, 2) + val : prevState.seconds + val
                }))
            } else {
                this.setState({
                    seconds: 0 + val
                })
            }
        }
    }

    changeSelectedElement = (val) => {
        this.setState({
            selectedElement: val
        })
    }

    reset = () => {
        this.setState({
            hours: '0',
            minutes: '0',
            seconds: '0',
            milliseconds: '0',
            timerPaused: true,
            appStarted: false
        })
    }

    start = () => {
        this.setState({
            timerPaused: false,
            appStarted: true
        }, () => {
            const tempT = new Time();
            let timeInMilliseconds = tempT.getTimeTwisted(this.state.hours, this.state.minutes, this.state.seconds, this.state.milliseconds);
            let myInterval = setInterval(() => {
                if (timeInMilliseconds > 0 && this.state.timerPaused === false) {
                    const t = new Time();
                    timeInMilliseconds = timeInMilliseconds - 10;
                    const returnedVal = t.getTime(timeInMilliseconds);
                    this.setState({
                        hours: returnedVal.hours < 10 ? '0' + returnedVal.hours : returnedVal.hours,
                        minutes: returnedVal.minutes < 10 ? '0' + returnedVal.minutes : returnedVal.minutes,
                        seconds: returnedVal.seconds < 10 ? '0' + returnedVal.seconds : returnedVal.seconds,
                        milliseconds: returnedVal.milliseconds < 10 ? '0' + returnedVal.milliseconds : returnedVal.milliseconds,
                        appStarted: false
                    });
                } else if (timeInMilliseconds > 0 && this.state.timerPaused === true) {
                    clearInterval(myInterval);
                    this.setState(prevState => ({
                        hours: prevState.hours,
                        minutes: prevState.minutes,
                        seconds: prevState.seconds,
                        milliseconds: prevState.milliseconds,
                        timerPaused: true,
                    }));
                } else {
                    clearInterval(myInterval);
                    this.setState({
                        hours: '0',
                        minutes: '0',
                        seconds: '0',
                        milliseconds: '0',
                        timerPaused: true,
                    });
                }
            }, 10);

        });
    }

    pause = () => {
        this.setState({
            timerPaused: true,
            appStarted: true
        })
    }

    render() {
        return (
            <div className='appFour-application-container'>
                <Card>
                    <CardContent className='appFour-card-content'>
                        <div className='appFour-card-content-display'>
                            <h1 className='appFour-card-display'>
                                {parseInt(this.state.hours) < 10 && this.state.hours.length < 2 ? 0 + this.state.hours : this.state.hours}:
                                {this.state.minutes.length === 1 ? 0 + this.state.minutes : this.state.minutes}:
                                {this.state.seconds.length === 1 ? 0 + this.state.seconds : this.state.seconds}
                                {this.state.timerPaused ? null : (this.state.milliseconds.length === 1 ? ':' + 0 + this.state.milliseconds : ':' + this.state.milliseconds.toString().substring(0, 2))}
                            </h1>
                            {
                                this.state.timerPaused === true  && this.state.appStarted === false?
                                    (<div className="appFour-inputs">
                                        <TextField
                                            id="hours"
                                            label="hours"
                                            value={this.state.hours}
                                            readOnly
                                            margin="normal"
                                            onClick={() => this.changeSelectedElement('hours')}
                                            className='appFour-timeInput'
                                        />
                                        <TextField
                                            id="minutes"
                                            label="minutes"
                                            value={this.state.minutes}
                                            readOnly
                                            margin="normal"
                                            onClick={() => this.changeSelectedElement('minutes')}
                                            className='appFour-timeInput'
                                        />
                                        <TextField
                                            id="seconds"
                                            label="seconds"
                                            value={this.state.seconds}
                                            readOnly
                                            margin="normal"
                                            onClick={() => this.changeSelectedElement('seconds')}
                                            className='appFour-timeInput'
                                        />
                                    </div>) : <div></div>
                            }

                        </div>
                        {
                            this.state.timerPaused === true && this.state.appStarted === false ? (<div className='appFour-card-content-controls'>
                                <div className='appFour-buttons'>
                                    <div className="appFour-row">
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('1', this.state.selectedElement)}>1</Button>
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('2', this.state.selectedElement)}>2</Button>
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('3', this.state.selectedElement)}>3</Button>
                                    </div>
                                    <div className="appFour-row">
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('4', this.state.selectedElement)}>4</Button>
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('5', this.state.selectedElement)}>5</Button>
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('6', this.state.selectedElement)}>6</Button>
                                    </div>
                                    <div className="appFour-row">
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('7', this.state.selectedElement)}>7</Button>
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('8', this.state.selectedElement)}>8</Button>
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('9', this.state.selectedElement)}>9</Button>
                                    </div>
                                    <div className="appFour-row lastRow">
                                        <Button className='appFour-valueButton appFour-button' variant="contained" onClick={() => this.addValue('0', this.state.selectedElement)}>0</Button>
                                    </div>
                                </div>
                            </div>) : <div></div>
                        }
                        <div className='appFour-controls'>
                            <Button className='appFour-controls-button appFour-button' variant="contained" onClick={this.reset}>Reset</Button>
                            {
                                this.state.timerPaused === true ? (<Button variant="contained" className='appFour-controls-button appFour-button' onClick={this.start}>Start</Button>) :
                                    (<Button variant="contained" className='appFour-controls-button appFour-button' onClick={this.pause}>Pause</Button>)
                            }
                        </div>

                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default AppFour;