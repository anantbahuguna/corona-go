import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card, CardContent, Typography, Grid, Link } from '@material-ui/core'
import styles from './GithubCard.module.css'

function GithubCard() {
    return (
        <div className={styles.container}>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                justify='center'>
                <Grid
                    item
                    component={Card}
                    elevation={5}
                    className={styles.card}>
                    <CardContent style={{backgroundColor: 'black', color: 'white',paddingTop: '9px'}}>
                    <Typography variant='button' style={{}}>
                    <Link  variant='inherit' style={{backgroundColor: 'black', color: 'white'}} href='https://github.com/anant-bahuguna/corona-go'><FontAwesomeIcon icon={faGithub} size='2x' />
                    <span style={{paddingLeft: '10px',paddingBottom: '15px'}}>
                        <b>OPEN SOURCED ON GITHUB</b>
                    </span>
                        </Link>
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default GithubCard;
