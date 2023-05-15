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
    <section id="Section3" className="bg-gray min-h-screen py-10">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me!</h2>
        <form onSubmit={sendEmail} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-lg text-gray-800 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-gray-800 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-gray-800 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="hover:opacity-70 bg-black text-white rounded px-4 py-2 hover:bg-blue-600"
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
    </section>
  );
}

