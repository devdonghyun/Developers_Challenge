import React from 'react';
import ChallengeList from '../components/ChallengeList';
import GithubCont from '../components/GithubCont';
import Header from '../components/Header';
import HorizonLine from '../components/HorizonLine';
import {challenges }from '../Challenges'

const Home = () => {
    return (
        <>
            <Header/>
            <GithubCont/>
            <HorizonLine text='참여 중인 챌린지'/>
            <ChallengeList challenges={challenges}/>
        </>
    )
}

export default Home