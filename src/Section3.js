import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function Section3() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let timer;
    if (showSuccessMessage) {
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 10000);
      const startTime = Date.now();
      const endTime = startTime + 10000; // 10 seconds
      const duration = 10000; // 10 seconds

      const updateProgress = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const remaining = Math.max(duration - elapsed, 0);
        const progress = (remaining / duration) * 100;
        setProgress(progress);

        if (currentTime < endTime) {
          requestAnimationFrame(updateProgress);
        }
      };

      updateProgress();

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showSuccessMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qwka1lk', 'template_tian4a3', e.target, 'eoyXbLXQzQav8vOis')
      .then((result) => {
        console.log(result.text);
        setShowSuccessMessage(true); // Show the success message
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="Section3" className="min-h-screen py-12 bg-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-black to-orange-500 text-5xl">Contact Me!</span>
        </h1>
        <form onSubmit={sendEmail} className="max-w-md mx-auto py-3">
          <div className="mb-4">
            <label className="block text-lg text-black font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="focus:border-orange-500 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-black font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="focus:border-orange-500 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-black font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="focus:border-orange-500 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="hover:opacity-70 shadow-lg shadow-orange-500 bg-black text-white rounded px-4 py-2"
            >
              Send Email
            </button>
          </div>
        </form>

        {showSuccessMessage && (
          <div className="bg-green-500 text-white px-2 py-1 rounded mt-4 max-w-xs mx-auto">
            Email sent successfully!
            <div className="h-2 bg-green-300 mt-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <img
          src="ghost.jpeg"
          alt="Ghost"
          className="shadow-2xl  shadow-pink rounded-md w-1/6 h-1/6  "
        />
      </div>
    </section>
  );
}

