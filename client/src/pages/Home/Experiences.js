import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Experiences() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { experiences } = portfolioData;

    return (
        <div>
            <SectionTitle title="Experiences" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#2f6690] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {experiences.map((experience, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl font-semibold ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#2f66903f] py-3 sm:w-full' : 'text-white'}`}>{experience.period}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl font-semibold'>{experiences[selectedItemIndex].title}</h1>
                    <h1 className='text-tertiary font-semibold'>{experiences[selectedItemIndex].company}</h1>
                    <p className='text-white'>{experiences[selectedItemIndex].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences