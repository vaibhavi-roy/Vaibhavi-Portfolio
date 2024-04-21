import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href='mailto:vaibhaviroy2002@gmail.com'><i class="ri-mail-line text-3xl"></i></a>
                    <a href='https://www.linkedin.com/in/vaibhavi-roy/'><i class="ri-linkedin-box-fill text-3xl"></i></a>
                    <a href='https://www.facebook.com/profile.php?id=100074342666155&mibextid=ZbWKwL'><i class="ri-facebook-circle-line text-3xl"></i></a>
                    <a href='https://www.instagram.com/vaibhavi___roy/'><i class="ri-instagram-line text-3xl"></i></a>
                    <a href='https://twitter.com/VaibhaviRoy1'><i class="ri-twitter-x-line text-3xl"></i></a>
                    <a href='https://github.com/vaibhavi-roy'><i class="ri-github-line text-3xl"></i></a>
                </div>
                <div className='w-[1px] h-32 bg-tertiary '></div>
            </div>
        </div>
    );
}

export default LeftSider