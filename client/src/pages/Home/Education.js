import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Education() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { education } = portfolioData;

    return (
        <div>
            <SectionTitle title="Education" />
            <div className="flex flex-wrap gap-8 justify-center">
                {education.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 p-6 border border-gray-200 rounded-md cursor-pointer relative ${selectedItemIndex === index ? 'border-tertiary' : ''}`}
                        style={{
                            width: '90%',
                            maxWidth: '300px',
                            minWidth: '250px',
                            height: '200px',
                            background: 'linear-gradient(135deg, #212a3c 0%, #676fgd 25%, #ffb17a 50%, #2d3250 75%, #fff 100%)'
                        }}
                        onClick={() => setSelectedItemIndex(index)}
                    >
                        <h2 className="text-lg font-semibold text-tertiary">{item.institute}</h2>
                        <p className="text-sm text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.period}</p>
                        <p className="text-sm text-white">{item.score}</p>
                        <div
                            className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 bg-gradient-to-b from-transparent to-black hover:opacity-50"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
