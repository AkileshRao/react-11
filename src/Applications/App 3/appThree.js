import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Time from './Time';

import './appThree.css';

class AppThree extends React.Component {
    t = new Time();
    constructor() {
        super();
        this.state = {
            time: 0,
            milliseconds: 0,
            timeLeft: this.t.getTime(0),
            timerStatus: false,
            isPaused: false
        }
    }

    changeTime = (e) => {
        console.log(e.target.value);
        this.setState({
            time: e.target.value > 0 ? e.target.value : 0,
            milliseconds: e.target.value * 1000,
        }, () => {
            this.setState({
                timeLeft: this.t.getTime(this.state.milliseconds)
            })
        })
    }


    startTimer = () => {
        this.setState({
            timerStatus: true,
            isPaused: false
        })
        let myInterval = setInterval(() => {
            if ((this.state.milliseconds >= 0) && (this.state.isPaused === false)) {
                this.setState(prevState => ({
                    milliseconds: prevState.milliseconds - 10,
                    time: prevState.time - 0.01,
                    timeLeft: this.t.getTime(this.state.milliseconds)
                }));
            } else {
                clearInterval(myInterval);
                let tempTime = this.state.time
                this.setState({
                    timerStatus: false,
                    time: Math.abs(tempTime.toFixed(1)),
                    milliseconds: Math.floor(this.state.time * 1000)
                })
            }
        }, 10);
    }

    pauseTimer = () => {
        this.setState({
            isPaused: true
        });
    }

    resetTimer = () => {
        this.setState({
            timerStatus: false,
            milliseconds: 0,
            time: 0,
            timeLeft: this.t.getTime(0),
        })
    }

    render() {
        return (
            <div className='appThree-application-container' >
                <Card>
                    <CardContent className='appThree-card-content'>
                        <h1 className='appThree-card-display'>{this.state.timeLeft.hours < 10 ? '0' + this.state.timeLeft.hours : this.state.timeLeft.hours}:
                        {this.state.timeLeft.minutes < 10 ? '0' + this.state.timeLeft.minutes : this.state.timeLeft.minutes}:
                        {this.state.timeLeft.seconds < 10 ? '0' + this.state.timeLeft.seconds : this.state.timeLeft.seconds}:
                        {this.state.timeLeft.milliseconds < 10 ? ('0' + this.state.timeLeft.milliseconds).slice(0, 2) : this.state.timeLeft.milliseconds.toString().slice(0, 2)}
                        </h1>
                        {this.state.timerStatus ? null : <TextField
                            id="standard-number"
                            label="Input time before starting"
                            value={this.state.time}
                            onChange={e => this.changeTime(e)}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            inputProps={{ min: "0" }}
                            className='appThree-time-selector'
                        />}

                    </CardContent>
                    <CardActions>
                        {this.state.timerStatus ? <Button disabled={this.state.time < 1} className='appTwo-toggler' size="small" onClick={this.pauseTimer}>Pause</Button> :
                            <Button disabled={this.state.time < 1} className='appTwo-toggler' size="small" onClick={this.startTimer}>Start</Button>}
                        <Button className='appTwo-toggler' size="small" onClick={this.resetTimer}>Restart</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }


}

export default AppThree;