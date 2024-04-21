import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';


function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 flex-col'>
                <div className='flex  gap-10 border-l-2 border-[#2d3250]  flex-row overflow-x-scroll w-full'>
                    {projects.map((project, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl font-semibold ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#2d32504d] py-3 sm:w-full' : 'text-white'}`}>{project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl font-semibold'>{projects[selectedItemIndex].title}</h1>
                    <i><h1 className='text-secondary'>{projects[selectedItemIndex].technologies}</h1></i>

                    <p className='text-white'>{projects[selectedItemIndex].description}</p>
                    <div className='text-secondary text-xl '><a href={projects[selectedItemIndex].link} className="text-blue-500 underline font-bold">Link</a></div>
                </div>
            </div>
        </div>
    )
}

export default Projects