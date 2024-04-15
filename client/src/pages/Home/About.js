import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import DevGirl from "../../images/devgirl.png";
import { useSelector } from 'react-redux';


function About() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { skills, description1, description2 } = about;

    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[80vh] flex flex-col items-start justify-center gap-8 w-1/2 sm:w-full'>
                    <img
                        src={DevGirl}
                        alt="dev girl"
                        className="rounded-full mx-auto md:w-md"
                    />
                </div>
                <div className='h-[80vh] flex flex-col items-start justify-center gap-8 w-1/2 sm:w-full'>

                    <p className='text-white'> {description1 || ''}</p>
                    <p className='text-white'>
                        {description2 || ''}
                    </p>

                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-tertiary text-2xl font-semibold'>Here are a few technologies I have been working on:</h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skill, index) => (
                        <div className='border-2 rounded-md border-tertiary py-3 px-10'>
                            <h1 className='text-tertiary font-semibold'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About