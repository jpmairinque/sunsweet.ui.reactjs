import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { HomeContainer } from './styles'
import Header from '../../components/Header/Header'


const Home = () => {
    return (
        <HomeContainer>
            <Header/>
           <Navbar/>
        </HomeContainer>
    )
}

export default Home
