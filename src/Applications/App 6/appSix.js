import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './appSix.css';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Checker from './checkerClass';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class AppSix extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            myValue: 0,
            computerValue: 0,
            gameMode: 'easy',
            message: "",
            dialogOpen: false,
            guessCount : 0
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        });
    }

    changeTextField = (e) => {
        this.setState({
            myValue: e.target.value
        })
    }

    checkNumber = () => {
        this.setState( prevState => ({
            guessCount : prevState.guessCount + 1
        }))
        if (this.state.gameMode === 'easy') {
            this.setState(prevState => ({
                computerValue: prevState.computerValue === 0 ? Math.ceil(Math.random() * 10) : prevState.computerValue
            }), () => {
                let checker = new Checker();
                this.setState({
                    message: checker.compareEasy(parseInt(this.state.myValue), this.state.computerValue)
                }, () => {
                    if (this.state.message === 'Das it') {
                        this.setState({
                            dialogOpen: true
                        })
                    }
                })
            })
        } else if (this.state.gameMode === 'medium') {
            this.setState(prevState => ({
                computerValue: prevState.computerValue === 0 ? Math.ceil(Math.random() * 100) : prevState.computerValue
            }), () => {
                let checker = new Checker();
                this.setState({
                    message: checker.compareMedium(parseInt(this.state.myValue), this.state.computerValue)
                }, () => {
                    if (this.state.message === 'Das it') {
                        this.setState({
                            dialogOpen: true
                        })
                    }
                })
            })
        } else {
            this.setState(prevState => ({
                computerValue: prevState.computerValue === 0 ? Math.ceil(Math.random() * 1000) : prevState.computerValue
            }), () => {
                let checker = new Checker();
                this.setState({
                    message: checker.compareHard(parseInt(this.state.myValue), this.state.computerValue)
                }, () => {
                    if (this.state.message === 'Das it') {
                        this.setState({
                            dialogOpen: true
                        })
                    }
                })
            })
        }

    }

    changeMode = (mode) => {
        this.setState({
            gameMode: mode,
            computerValue: 0,
            guessCount : 0
        })
    }

    handleClose = () => {
        this.setState({
            value: 0,
            myValue: 0,
            computerValue: 0,
            gameMode: 'easy',
            message: "",
            dialogOpen: false,
            guessCount : 0
        })
    }

    render() {
        return (
            <div className='appSix-container' >
                <div>
                    <h2 className='appSix-guessCount'>Number of guesses : {this.state.guessCount}</h2>
                    <Paper square className='appSix-paper'>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            variant="fullWidth"
                            indicatorColor='primary'
                            textColor="secondary"
                            aria-label="icon tabs example"
                        >
                            <Tab className='appSix-Tab' label='EASY' aria-label="phone" onClick={() => this.changeMode('easy')}></Tab>
                            <Tab className='appSix-Tab' label='MEDIUM' aria-label="favorite" onClick={() => this.changeMode('medium')}></Tab>
                            <Tab className='appSix-Tab' label='HARD' aria-label="person" onClick={() => this.changeMode('hard')}></Tab>
                        </Tabs>

                    </Paper>
                    <TextField
                        id="standard-number"
                        label=""
                        value={this.state.myValue}
                        onChange={e => this.changeTextField(e)}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        inputProps={{ min: "0" }}
                        className='appSix-number-selector'
                    />
                    <Button className='appSix-controls-button appSix-button' variant="contained" onClick={this.checkNumber}>Guess</Button>
                    <div className='appSix-success-message-container'>
                        <h1 className='appSix-successMessage'>
                            {this.state.message}
                        </h1>
                    </div>
                </div>
                <Dialog
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogContent>
                        <DialogContentText>
                            You won!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleClose}>
                            Play Again
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default AppSix;

