import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './appFive.css';

const AppFiveCard = (props) => {
    const stars = [];
    for (let i = 0; i < props.rating; i++) {
        stars.push(<i className="material-icons">star</i>);
    }
    return (
        <div className='appFive-card-container'>
            <Card className='appFive-card'>
                <CardActionArea>
                    <CardMedia
                        image={require(`${props.image}`)}
                        title={props.title}
                        className='appFive-card-image'
                    />
                    <CardContent className='appFive-cardContent'>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className='appFive-star-container'>
                        {
                            stars.map((star, index) => {
                                return star
                            })
                        }
                    </div>
                </CardActions>
            </Card>
        </div>

    );
}
export default AppFiveCard;