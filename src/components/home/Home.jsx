import React from 'react';
import './home.css';
import Navbar from '../navbar/Navbar';
import image1 from '../../assets/1.jpg';
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="homepage">
                <div className='home-left'>
                    <div className="big-circle">
                        <div className="small-circle">Events</div>
                        <div className="small-circle">News</div>

                        <div className="small-circle"></div>
                        <div className="small-circle">Hangout</div>

                        <div className="small-circle"></div>
                        <div className="small-circle">Fundraisers</div>
                    </div>

                </div>
                <div className='home-right'>
                    <h2>Celebrate Love, Celebrate Pride.</h2>
                </div>
            </div>
            <img src={image1} alt='logo' className='home-image' />

        </div>

    );
};

export default HomePage;
