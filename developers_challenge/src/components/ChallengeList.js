import React from 'react';
import Challenge from './Challenge';
import {Grid} from '@material-ui/core';

const ChallengeList = ({challenges}) => {
    const challengeList = challenges.map(challenge => {
        return <Grid item key={challenge.id}>
            <Challenge id={challenge.id} title={challenge.title} detail={challenge.detail}/>
        </Grid>
    })
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={8} justifyContent="center">
                {challengeList}
            </Grid>
        </div>
    )
}

export default ChallengeList;