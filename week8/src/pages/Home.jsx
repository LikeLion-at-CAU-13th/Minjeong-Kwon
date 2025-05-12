import Header from '../components/Header';
import React from 'react';
import ProfileSection from '../components/ProfileSection';
import Navbar from '../components/Navbar';
import ProjectTabs from '../components/ProjectTabs';
import BottomNavbar from '../components/BottomNavbar';

const Home = () => {
    return (
        <div>
            <Header />
            <ProfileSection />
            <Navbar />
            <ProjectTabs/>
            <BottomNavbar />
        </div>
    );
};

export default Home;