import React from 'react';

export default function Section2() {

  const projects = [
    {
      id: 1,
      name: 'Smart Blinds',
      imageSrc: 'https://raw.githubusercontent.com/NathanBoj/Smart_Blinds/main/images/physical.jpg',
      color: 'purple',
      description: 'These smart blinds can be controlled through a mobile app, allowing you to easily adjust lighting and temperature in your home. They utilize Arduino sensors to detect light levels and temperature, and employ Machine Learning to learn your preferences and automatically adjust the blinds based on your daily routine.',
      url: 'https://github.com/NathanBoj/Smart_Blinds',
    },
    {
      id: 2,
      name: 'Self-Driving-Car',
      imageSrc: 'https://raw.githubusercontent.com/NathanBoj/Self-Driving-Car/main/assets/car1.gif',
      color: 'green-600',
      description: 'The idea behind this project is to explore the prospect of self-driving cars by creating a top-down 2-D car simulator. The goal is to let the car learn how to navigate itself using virtual distance sensors, neural networks and some aspects of genetic algorithms. The machine learning model used in this project is similar to reinforcement learning, where AI cars which go off track are stopped while ones that make it further can be saved and replicated.',
      url: 'https://github.com/NathanBoj/Self-Driving-Car',
    },
    {
      id: 3,
      name: 'Password Manager Application',
      imageSrc: 'https://raw.githubusercontent.com/NathanBoj/Password_Manager/main/screenshots/login.jpg',
      color: 'teal-500',
      description: 'With the growing number of online sites and services which all require you to have complex passwords, it can be tough to remember and keep track of so many different combinations. This project is aimed at creating a secure and user-friendly mobile application that will allow users to store their passwords and sensitive information in an encrypted format. The app will utilize strong encryption algorithms to ensure confidentiality, integrity, and authorization of user passwords, alongside removing the stress that comes with entering passwords.',
      url: 'https://github.com/NathanBoj/Password_Manager',
    },
    {
      id: 4,
      name: 'GeForce-RTX-40-Series-Website',
      imageSrc: './gpu.gif',
      color: 'red-400',
      description: 'I\'ve developed a mock website showcasing Nvidia\'s Geforce RTX 40 Series Graphics Cards, employing an immersive and visually stunning experience. The website leverages cutting-edge technologies such as Three.js, WebGl, and GSAP to deliver impressive graphics and smooth animations. Furthermore, GSAP enhances the user experience with fluid animations and engaging interactions, making the mock website a captivating representation of Nvidia\'s next-generation graphics cards.',
      url: 'https://github.com/NathanBoj/GeForce-RTX-40-Series-Website',
    },
    {
      id: 5,
      name: 'Face2Emote',
      imageSrc: 'https://raw.githubusercontent.com/NathanBoj/Face2Emote/main/images/example.png',
      color: 'yellow-500',
      description: 'I\'ve created a a unique application that seamlessly connects your webcam and Twitch chat. This innovative solution captures your webcam\'s video stream and captures a picture every 10 seconds. Utilizing deepface technology, it predicts your facial expressions and determines your mood. Leveraging TwitchIO, the application sends messages to the Twitch chat on behalf of your Twitch account, providing a keyboardless and immersive Twitch chat experience. This integration allows you to engage with chatters effortlessly while focusing on the stream or other content.',
      url: 'https://github.com/NathanBoj/Face2Emote',
    },
    {
      id: 6,
      name: 'Personal Portfolio',
      imageSrc: './portfolio1.gif',
      color: 'orange-500',
      description: 'I developed a personal website portfolio with the aim of showcasing my skills, personal projects, and providing a means for contacting me. To create this portfolio, I leveraged the power of React, Tailwind CSS, and Three.js. These technologies allowed me to design an interactive and visually appealing platform to present my talents to potential visitors.',
      url: 'https://github.com/NathanBoj/portfolio1/tree/main',
    },
  ];

  return (
    <section id="Section2" className="min-h-screen py-12 bg-black">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-white to-orange-500 text-5xl">Exciting Projects</span>
        </h1>
        <div className="container mx-auto py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
          {projects.map((project) => (
            <div key={project.id}
              className={`mb-5 aspect-w-1 aspect-h-1 mx-auto bg-white rounded-xl shadow-md overflow-hidden border-4 border-${project.color} max-w-md`}>
              <div className="rounded-lg">
                <div className="w-full h-64 relative">
                  <img
                    src={project.imageSrc}
                    alt={`Project ${project.id}`}
                    className="object-cover object-center w-full h-full max-h-64" />
                  <div onClick={() => window.open(project.url, '_blank')} className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white opacity-90"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </div>

                <div className="p-3">
                  <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                  <p className="text-black indent-8">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
