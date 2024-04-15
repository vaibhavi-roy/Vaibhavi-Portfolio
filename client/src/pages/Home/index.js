import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'
import Education from './Education'

function Home() {
    const { portfolioData } = useSelector((state) => state.root);

    return (
        <div>
            <Header />
            {portfolioData && (
                <div className='bg-primary px-40 sm:px-1'>
                    <Intro />
                    <About />
                    <Education />
                    <Experiences />
                    <Projects />
                    <Contact />
                    <Footer />
                    <LeftSider />
                </div>
            )}
        </div>
    )
}

export default Home