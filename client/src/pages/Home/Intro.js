import React from 'react';
import MainImage from "../../images/mainimg.png";
import { useSelector } from 'react-redux';

function Intro() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { intro } = portfolioData;
    const { firstName, lastName, welcomeText, description, caption, CV } = intro;

    return (
        <div className='flex w-[90%] ml-32 sm:ml-2 sm:w-full items-center justify-center sm:flex-col '>
            <div className='container items-start justify-center'>
                <div className='h-[80vh] flex flex-col items-start justify-center gap-8 w-3/4 sm:w-full sm:gap-6 sm:h-[60vh]'>
                    <h1 className='text-white text-2xl'>{welcomeText || ''}</h1>
                    <h1 className='text-7xl sm:text-2xl text-secondary font-bold'>{firstName || ''} {lastName || ''}</h1>
                    <h1 className='text-3xl sm:text-xl text-white font-semibold'>
                        {caption && caption.split(' ').map((word, index) => {
                            if (index === 3 || index === 7 || index === 8 || index === 9) {
                                return <span key={index} className="highlight-word">{word}&nbsp;</span>;
                            }
                            return word + " ";
                        })}
                    </h1>
                    <p className='text-white text-l sm:text-md'>{description && description.split(' ').map((word, index) => {
                        if (index === 4 || index === 15 || index === 14) {
                            return <span key={index} className="highlight-word">{word}&nbsp;</span>;
                        }
                        return word + " ";
                    })}</p>
                    <a href={CV} download>
                        <button className='gradient-button border-2 border-tertiary text-tertiary px-10 py-3 rounded-md font-semibold'>
                            <i>DOWNLOAD CV</i>
                        </button>
                    </a>
                </div>
            </div>
            <div className='h-[60vh] flex flex-col items-start justify-center w-[98vh] sm:w-4/5'>
                <img
                    src={MainImage}
                    alt="my profile"
                    className="rounded-full border-4 border-border1 mx-auto w-4/5 md:w-md"
                />
            </div>
        </div>
    )
}

export default Intro;
