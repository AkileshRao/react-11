import React from 'react';
import './appSeven.css';
import Button from '@material-ui/core/Button';
import { create, all } from 'mathjs';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const config = {};
const math = create(all, config);
class AppSeven extends React.Component {
    constructor() {
        super();
        this.state = {
            mainDisplay: '',
            subDisplay: '',
            resultDisplayed: false,
            history: [],
            showHistory: false
        }
    }

    displayNumber = (value) => {
        this.setState(prevState => ({
            resultDisplayed: false,
            mainDisplay: prevState.resultDisplayed && prevState.mainDisplay !== '' ? value : prevState.mainDisplay + value,
        }))
    }

    addOperator = (operator) => {
        if (this.state.mainDisplay !== '' &&
            (this.state.subDisplay.slice(this.state.subDisplay.length - 1, this.state.subDisplay.length) !== '/' ||
                this.state.subDisplay.slice(this.state.subDisplay.length - 1, this.state.subDisplay.length) !== '*' ||
                this.state.subDisplay.slice(this.state.subDisplay.length - 1, this.state.subDisplay.length) !== '+' ||
                this.state.subDisplay.slice(this.state.subDisplay.length - 1, this.state.subDisplay.length) !== '-')) {
            this.setState(prevState => ({
                subDisplay: prevState.subDisplay + prevState.mainDisplay + operator,
                mainDisplay: ''
            }))
        }
    }

    clear = () => {
        this.setState({
            mainDisplay: '',
            subDisplay: '',
        })
    }

    calculate = () => {
        console.log(this.state.subDisplay.slice(this.state.subDisplay.length -1, this.state.subDisplay.length));
        if (this.state.mainDisplay !== '' && (this.state.subDisplay.slice(this.state.subDisplay.length - 1, this.state.subDisplay.length) !== '/' ||
            this.state.subDisplay.slice(this.state.subDisplay.length - 1, this.state.subDisplay.length) !== '*' ||
            this.state.subDisplay.slice(this.state.subDisplay.length - 1, this.state.subDisplay.length) !== '+' ||
            this.state.subDisplay.slice(this.state.subDisplay.length - 1, this.state.subDisplay.length) !== '-')) {
            const tempArray = this.state.history;
            tempArray.push({
                main: this.state.mainDisplay,
                sub: this.state.subDisplay,
                res: math.evaluate(this.state.subDisplay + this.state.mainDisplay)
            })

            this.setState(prevState => ({
                mainDisplay: math.evaluate(prevState.subDisplay + prevState.mainDisplay),
                resultDisplayed: true,
            }), () => {
                console.log(this.state.history);
                this.setState(prevState => ({
                    subDisplay: '',
                    history: tempArray
                }))
            })
        }


    }

    undo = () => {
        this.setState(prevState => ({
            mainDisplay: prevState.mainDisplay.slice(0, prevState.mainDisplay.length - 1)
        }))
    }

    togglePolarity = () => {
        this.setState(prevState => ({
            mainDisplay: parseInt(prevState.mainDisplay) > 0 ? '-' + prevState.mainDisplay : prevState.mainDisplay,
        }));
    }

    toggleHistory = () => {
        this.setState({
            showHistory: !this.state.showHistory
        })
    }

    clearHistory = () => {
        this.setState({
            history: []
        })
    }

    removeHistoryItem = (number) => {
        console.log(number);
        const tempArray = this.state.history;
        tempArray.splice(number, 1);
        this.setState({
            history: tempArray
        })
    }

    render() {
        return (
            <div className='appSeven-container'>
                <div className='appSeven'>
                    <div className="appSeven-screen">
                        <div className="appSeven-subDisplay">
                            {this.state.subDisplay}
                        </div>
                        <div className="appSeven-mainDisplay">
                            {this.state.mainDisplay}
                        </div>
                    </div>
                    <div className='appSeven-controls'>
                        <Button className='appSeven-controls-button appSeven-button appSeven-history-button' variant="contained" onClick={this.toggleHistory}>HISTORY</Button>
                        {
                            this.state.showHistory === true ?
                                <div className='appSeven-history-block'>
                                    {
                                        this.state.history.map((elem, index) => {
                                            return (<Paper onClick={() => this.removeHistoryItem(index)}>
                                                <Typography component="p">
                                                    {elem.sub + elem.main}
                                                </Typography>
                                                <Typography variant="h5" component="h3">
                                                    {elem.res}
                                                </Typography>
                                            </Paper>)

                                        })
                                    }
                                </div> :
                                <div className='appSeven-rest'>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={this.clearHistory}>CE</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={this.clear}>C</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={this.undo}>DEL</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.addOperator('/')}>/</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('7')}>7</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('8')}>8</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('9')}>9</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.addOperator('*')}>*</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('4')}>4</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('5')}>5</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('6')}>6</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.addOperator('-')}>-</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('1')}>1</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('2')}>2</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('3')}>3</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.addOperator('+')}>+</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={this.togglePolarity}>+/-</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber('0')}>0</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={() => this.displayNumber(".")}>.</Button>
                                    <Button className='appSeven-controls-button appSeven-button' variant="contained" onClick={this.calculate}>=</Button>
                                </div>
                        }
                    </div>
                </div>

            </div >
        )
    }
}

export default AppSeven;