import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux'
import AdminEducation from './AdminEducation';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminContact from './AdminContact';

function Admin() {
    const { portfolioData } = useSelector((state) => state.root);
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.location.href = "/admin-login";
        }
    }, []);
    return (
        <>
            <Header />
            <div className='flex gap-10 items-center px-5 py-2 justify-between'>
                <div className='flex gap-10 items-center'>
                    <h1 className='text-3xl text-secondary font-semibold'>Portfolio Admin</h1>
                    <div className='w-60 h-[1.5px] bg-secondary '></div>
                </div>
                <h1 className='underline text-primary text-xl font-semibold cursor-pointer'
                    onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/admin-login';
                    }}
                >Logout</h1>
            </div>
            {portfolioData && <div className='px-5 pb-10'>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: 'Intro',
                            key: '1',
                            children: <AdminIntro />,
                        },
                        {
                            label: 'About',
                            key: '2',
                            children: <AdminAbout />,
                        },
                        {
                            label: 'Education',
                            key: '3',
                            children: <AdminEducation />,
                        },
                        {
                            label: 'Experiences',
                            key: '4',
                            children: <AdminExperiences />,
                        },
                        {
                            label: 'Projects',
                            key: '5',
                            children: <AdminProjects />,
                        },
                        {
                            label: 'Contacts',
                            key: '6',
                            children: <AdminContact />,
                        },
                    ]}
                />
            </div>}
        </>
    )
}

export default Admin