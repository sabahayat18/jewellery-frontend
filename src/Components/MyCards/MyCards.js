import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"


export default function MyCard(props) {
    return (

        <Card sx={{ maxWidth: 250 }} >
            <CardMedia
                component="img"
                alt="no img"
                height="155"
                width='325px'
                src={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.text1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.text2}
                </Typography>
            </CardContent>
            <CardActions className='mycard-link'>
                <Link to={props.Link} style={{ textDecoration: 'none' }}>
                    <Button style={{ backgroundColor: '#832f37', alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%', textDecoration: "none" }} variant="contained" size="small">{props.text3}</Button>
                </Link>

            </CardActions>
        </Card>

    );
}
