import React from 'react';
import WeatherService from './weatherService';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './appEight.css';

class AppEight extends React.Component {

    constructor() {
        super();
        this.state = {
            weather: {},
            forecast: [],
            apiCallStatus: null
        }
    }

    componentDidMount() {
        let ws = new WeatherService();
        ws.getCurrentWeather().then(res => {
            this.setState({
                apiCallStatus: true
            }, () => {
                this.setState({
                    weather: res
                }, () => {
                    this.setState({
                        apiCallStatus: false
                    })
                })
            })
        })

        ws.getForecastWeather().then(res => {
            this.setState({
                apiCallStatus: true
            }, () => {
                this.setState({
                    forecast: res
                }, () => {
                    this.setState({
                        apiCallStatus: false
                    })
                    console.log(this.state.forecast);
                })
            })
        })
    }


    render() {
        const options = {
            items: 3,
            nav: true,
            rewind: true,
            autoplay: false
        };

        return (
            <div className='appEight-container'>
                <div className="appEight-current">
                    {this.state.apiCallStatus === false ? (<Card>
                        <CardContent className='appEight-card-content'>
                            <Typography color="textSecondary" gutterBottom>
                                {this.state.weather.place}
                            </Typography>

                            <Typography variant="h5" component="h2">
                                <img src={this.state.weather.icon} alt="weather" />
                            </Typography>

                            <Typography variant="h5" component="h2">
                                {this.state.weather.main} &deg;C / {this.state.weather.weather_status}
                            </Typography>

                            <Typography color="textSecondary">
                                Min : {this.state.weather.min} &deg;C/ Max : {this.state.weather.max} &deg;C
                            </Typography>

                        </CardContent>
                    </Card>) : <h1>Loading data</h1>}
                </div>

                <div className="appEight-hourly">
                    {this.state.apiCallStatus === false ?
                        <OwlCarousel className="owl-theme"
                            loop
                            margin={10}
                            nav>
                            {this.state.forecast.map((day, index) => {
                                return (<Card key={index}>
                                    <CardContent className='appEight-card-content'>
                                        <Typography color="textSecondary">
                                            {day.date}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            <img src={day.icon} alt="weather" />
                                        </Typography>

                                        <Typography variant="h5" component="h2">
                                            {day.main} &deg;C / {day.weather_status}
                                        </Typography>

                                        <Typography color="textSecondary">
                                            Min : {day.min} &deg;C/ Max : {day.max} &deg;C
                            </Typography>

                                    </CardContent>
                                </Card>)
                            })}
                        </OwlCarousel>
                        : <h1>Loading data</h1>}

                </div>
            </div>
        )
    }
}

export default AppEight;