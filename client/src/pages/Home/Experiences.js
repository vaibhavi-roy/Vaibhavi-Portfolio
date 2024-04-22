import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Experiences() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { experiences } = portfolioData;

    return (
        <div>
            <SectionTitle title="Experiences" />
            <div className="flex w-[90%] ml-16 sm:ml-5 flex-row gap-10 sm:flex-row sm:overflow-x-scroll sm:w-[90%]">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center cursor-pointer rounded-lg p-6 border-l-4 ${selectedItemIndex === index ? 'border-tertiary' : 'border-transparent'} hover:border-tertiary transition-all duration-300`}
                        style={{
                            backgroundImage: `linear-gradient(135deg, #212a3c, #676fgd, #ffb17a, #2d3250)`,
                            color: selectedItemIndex === index ? '#fff' : '#424769',
                        }}
                        onClick={() => setSelectedItemIndex(index)}
                    >
                        <h2 className="text-xl font-semibold">{experience.period}</h2>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex w-[90%] ml-16 sm:ml-5 sm:w-[90%]">
                <div className="p-8 rounded-lg bg-gradient-to-b from-[#212a3c] to-[#1d1f38] border border-tertiary">
                    <h1 className="text-2xl font-semibold text-tertiary">{experiences[selectedItemIndex].title}</h1>
                    <h1 className="text-lg font-semibold text-tertiary">{experiences[selectedItemIndex].company}</h1>
                    <p className="mt-4 text-white">{experiences[selectedItemIndex].description}</p>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
