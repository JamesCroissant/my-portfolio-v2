'use client'; 
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.current === null) return;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current?.reset();
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="grid my-8 md:my-8 py-24">
      <h2 className="text-white text-4xl text-center font-bold my-4">Contact</h2>
      <form 
        className="flex flex-col gap-6"
        ref={form} 
        onSubmit={sendEmail}
      >
        <div className="mb-6 mx-8">
          <label
            htmlFor="name"
            className="text-white block test-sm mb-2 font-medium"
          >
            Name
          </label>
          <input
            name="name"
            type="name"
            id="name"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="input your name"
          />
        </div>

        <div className="mb-6 mx-8">
          <label
            htmlFor="email"
            className="text-white block test-sm mb-2 font-medium"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="input your email address"
          />
        </div>

        <div className="mb-6 mx-8">
          <label
            htmlFor="message"
            className="text-white block test-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="input the message"
          />
        </div>

        <div className="mb-6 mx-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300 hover:opacity-80 text-white font-medium py-2.5 mx-4 rounded-lg w-48 text-center"
          >
            Send Message
          </button>
        </div>
      
      </form>
    </section>
  )
}

export default Contact;