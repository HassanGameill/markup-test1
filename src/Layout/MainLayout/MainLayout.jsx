import React from 'react';
import MainHeader from '../../Components/Common/Header/MainHeader/MainHeader';
import FirstHeader from '../../Components/Common/Header/firstHeader/FirstHeader';
import Home from '../../Pages/Home/Home';

const MainLayout = () => {
    return (
        <div>
            <MainHeader />

            <div className="">
                <Home />
            </div>
        </div>
    );
}

export default MainLayout;
