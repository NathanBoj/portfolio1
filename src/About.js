import React from 'react'

export default function About() {



    return (
        <section id="About" className="py-12  min-h-screen"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/wall1.svg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
            <div className="flex flex-col justify-end py-12 mx-auto max-w-3xl">

                <div className='mx-5'>
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-white to-orange-500 text-5xl inline-block">
                            Overview
                        </span>
                        <svg className="w-10 h-10 mb-2 ml-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"></path>
                        </svg>
                    </h1>
                    <div className="bg-black rounded-lg p-6 mb-6">
                        <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left text-lg text-white leading-relaxed ">
                            <span>
                                Welcome to my website! As a passionate software engineer, I am dedicated to crafting innovative solutions that enhance user experiences. With a deep curiosity for emerging technologies and a drive to tackle complex challenges, I am excited to contribute my skills and knowledge to a dynamic and rewarding software engineering role. Through this website, I aim to showcase my projects, skills, and achievements, providing insights into my professional journey and demonstrating my commitment to delivering excellence in software development. </span>
                        </p>
                    </div>
                </div>
                <div className='mx-5'>
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-white to-orange-500 text-5xl inline-block">
                            Education
                        </span>
                        <svg className="w-10 h-10 mb-2 ml-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"></path>
                            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"></path>
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
                        </svg>
                    </h1>
                    <div className="bg-black rounded-lg p-6 mx-auto mb-6">
                        <p className="text-lg text-white leading-relaxed ">
                            <span><b>Ontario Tech University</b><br />
                                Oshawa, ON <br />
                                Bachelor of Software Engineering, <br />
                                Honours. GPA: 3.58/4.3 <br />
                                2019 - 2023</span>
                        </p>
                    </div>
                </div>
                <div className='mx-5'>
                    <h1 className="text-4xl font-bold mb-4 ">
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-black to-orange-500 text-5xl inline-block">
                            Skills
                        </span>
                        <svg className="w-10 h-10 mb-2 ml-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"></path>
                        </svg>
                    </h1>
                    <div className="bg-black text-white leading-relaxed rounded-lg p-6 mx-auto mb-6">
                        <div className='pb-4'>
                            <b>Languages:</b>
                            <br />
                            Java, C/C++, Python, JavaScript, HTML/CSS.
                        </div>
                        <div className="mb-4">
                            <b>Technologies:</b>
                            <br />
                            AWS, React.js, Node.js, Express.js, Three.js, CSS frameworks, Git, MySQL, Firebase, Android Studio, Arduino.
                        </div>
                    </div>


                </div>
                <div className='mx-5 mb-6'>
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-black to-orange-500 text-5xl inline-block">
                            Certificates
                        </span>
                        <svg className="w-10 h-10 mb-2 ml-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"></path>
                        </svg>
                    </h1>
                    <div className='flex'>
                        <div className="bg-black rounded-lg p-3 mx-2 hover:opacity-70 " onClick={() => window.open("https://www.parchment.com/u/award/eaa67b4714d34c5a80413c886b60a876", '_blank')}>
                            <img src={`${process.env.PUBLIC_URL}/diploma.png`} alt='diploma' />
                        </div>
                        <div className="bg-black rounded-lg p-3 mx-2 hover:opacity-70" onClick={() => window.open("https://www.credly.com/badges/6d27ee5c-5e1c-48af-9122-0ab702e4db54/linked_in?t=ryocqq", '_blank')} >
                            <img src={`${process.env.PUBLIC_URL}/ccp.png`} alt='ccp' />
                        </div>
                    </div>
                </div>

                <div className='mx-5'>
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-black to-orange-500 text-5xl inline-block">
                            Interests
                        </span>
                        <svg className="w-10 h-10 mb-2 ml-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"></path>
                        </svg>
                    </h1>
                    <div className="bg-black rounded-lg p-6 mx-auto mb-6">
                        <p className="indent-8 text-lg text-white leading-relaxed ">
                            Outside of coding, I have a keen interest in various activities and subjects. I enjoy exploring space phenomena, delving into the world of computers, engaging in video and photo editing, exploring machine learning, and diving into worlds of video games such as Elden Ring.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}

