import React from 'react';

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Main from "../Main/Main"

import './styles/style.css'

const Home = () => {
    return ( 
        <div className='container'>
            <Header />
            <Sidebar />
            <Main />
        </div>
     );
}
 
export default Home;