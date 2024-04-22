import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import ContactImg from "../../images/contactimg.png";
import { useSelector } from 'react-redux';


function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;
    return (
        <div>
            <SectionTitle title="Contact Me" />
            <div className='flex w-[90%] ml-16 sm:ml-2 sm:w-[95%]  items-center sm:flex-col'>
                <div className='flex w-full items-center sm:flex-col'>
                    <div className="flex flex-col gap-1">
                        <p className="text-tertiary text-xl font-semibold sm:font-light sm:text-l">{"{"}</p>
                        {Object.keys(contact).map((key) => key !== "_id" && (
                            <p className="ml-5">
                                <span className="text-tertiary text-2xl font-semibold sm:font-light sm:text-xl"> {key} : </span>
                                <span className="text-tertiary text-2xl font-semibold sm:font-light sm:text-xl">{contact[key]}</span>
                            </p>
                        ))}
                        <p className="text-tertiary text-2xl font-semibold sm:font-light sm:text-xl">{"}"}</p>
                    </div>
                </div>
                <div className=' flex flex-col items-start justify-center w-screen sm:w-3/4'>
                    <img
                        src={ContactImg}
                        alt="dev girl"
                        className="rounded-full mx-auto md:w-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact