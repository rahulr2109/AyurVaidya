import React from 'react'
import { Container } from '@mui/material';
import Navbar from '../Navbar';
import GridLayout from '../GridLayout';
import PostBrowser from '../PostBrowser';
import Sidebar from '../Sidebar';
import HomePanel from '../HomePanel';
import HomeHistory from '../HomeHistory';

const Home = () => {
    return (
        <Container>
            <Navbar />
            <GridLayout isHome={true}
                right={<HomeHistory />}
                left={<HomePanel />}
            />
        </Container>
    );

}

export default Home