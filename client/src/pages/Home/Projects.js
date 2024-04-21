import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;

    return (
        <div>
            <SectionTitle title="Projects" />
            <div className="flex py-10 gap-20 flex-col">
                <div className="flex gap-10 flex-row overflow-x-scroll w-full">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${selectedItemIndex === index ? 'bg-gradient-to-br from-[#2d3250] to-[#1d1f38] text-tertiary border-tertiary border-l-4 -ml-1' : 'bg-gradient-to-br from-[#212a3c] to-[#424769] text-white'}`}
                            onClick={() => setSelectedItemIndex(index)}
                        >
                            <h1 className="text-xl font-semibold">{project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-secondary text-xl font-semibold">{projects[selectedItemIndex].title}</h1>
                    <i><h1 className="text-tertiary font-semibold">{projects[selectedItemIndex].technologies}</h1></i>
                    <p className="text-white">{projects[selectedItemIndex].description}</p>
                    <div className="text-secondary text-xl">
                        <a href={projects[selectedItemIndex].link} className="text-blue-500 underline font-bold">Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
