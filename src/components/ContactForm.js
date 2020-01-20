/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from './Button';

const ContactForm = () => (
  <form
    className="px-8 pt-6 pb-8 mb-4 mt-20 justify-center mx-auto my-20 py-24 rounded-lg text-center"
    action="https://formspree.io/mrgpobvw"
    method="POST"
  >
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="name"
        >
          Full Name
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="name"
          type="text"
        />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="email"
        >
          Email
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="email"
          type="email"
        />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="message"
        >
          Message
        </label>
      </div>
      <div className="md:w-2/3">
        <textarea
          className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="message"
          type="text"
          rows={5}
        />
      </div>
    </div>
    <div className="md:flex md:items-center">
      <p className="mt-8">
        <Button type="submit">Get Started Now</Button>
      </p>
    </div>
  </form>
);

export default ContactForm;
