import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import DevGirl from "../../images/devgirl2.png";
import { useSelector } from 'react-redux';


function About() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { skills, description1, description2 } = about;

    return (
        <div>
            <SectionTitle title="About Me" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[60vh] flex flex-col items-start justify-center gap-8 w-1/2 sm:w-3/4 sm:h-3/4 sm:mb-12'>
                    <img
                        src={DevGirl}
                        alt="dev girl"
                        className="rounded-2xl mx-auto md:w-md"
                    />
                </div>
                <div className='h-[60vh] flex flex-col items-start justify-center gap-8 w-1/2 sm:w-4/5 sm:h-3/4'>

                    <p className='text-white'> {description1 && description1.split(' ').map((word, index) => {
                        if (index === 2 || index === 3 || index === 9 || index === 10 || index === 31 || index === 35 || index === 37 || index === 42 || index === 45 || index === 9 || index === 50 || index === 52) {
                            return <span key={index} className="highlight-word">{word}&nbsp;</span>;
                        }
                        return word + " ";
                    })}</p>
                    <p className='text-white'> {description2 && description2.split(' ').map((word, index) => {
                        if (index === 2 || index === 4 || index === 9 || index === 11 || index === 18 || index === 19 || index === 36 || index === 37 || index === 38 || index === 22 || index === 23 || index === 24 || index === 31 || index === 33 || index === 45 || index === 47) {
                            return <span key={index} className="highlight-word">{word}&nbsp;</span>;
                        }
                        return word + " ";
                    })}</p>

                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-tertiary text-2xl font-semibold'>Here are a few technologies I have been working on:</h1>
                <div className='flex flex-wrap gap-10 mt-5 '>
                    {skills.map((skill, index) => (
                        <div className={`gradient-button cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg  'bg-gradient-to-br from-[#2d3250] to-[#1d1f38] text-tertiary : 'bg-gradient-to-br from-[#212a3c] to-[#424769] text-white'`}>
                            <h1 className='text-tertiary font-semibold'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About