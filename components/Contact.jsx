'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import PhoneInput from 'react-phone-input-2';
import QRCode from 'react-qr-code'; // Importing react-qr-code

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus('Please enter a valid email address.');
            return;
        }

        console.log('Form submitted:', formData);
        setFormStatus('Thank you for your message!');

        setFormData({
            name: '',
            phone: '',
            email: ''
        });
    };

    return (
        <div id='contact' className='w-full lg:h-screen py-4'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 flex flex-col lg:flex-row'>
                <div className='lg:w-1/2'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='uppercase text-2xl tracking-widest p-4 font-bold text-gray-500'>Contact with us</p>
                    </div>
                    <div className='bg-white w-[70%] md:w-[60%] lg:w-[80%] m-auto p-8 rounded-3xl shadow-lg'>
                        <img
                            src='/assets/show_int.jpg'
                            alt='Contact Us'
                            className='object-cover rounded-t-lg mb-4 mx-auto'
                        />
                        {formStatus && <p className="text-gray-700 mb-4">{formStatus}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor='name' className='block text-gray-700 mb-1'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full p-2 bg-gray-100 rounded-3xl'
                                    required
                                    aria-label="Name"
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='phone' className='block text-gray-700 mb-1'>Phone</label>
                                <PhoneInput
                                    country={'us'}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    inputStyle={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '12px',
                                        backgroundColor: '#f3f4f6'
                                    }}
                                    buttonStyle={{
                                        borderRadius: '12px',
                                        backgroundColor: '#f3f4f6'
                                    }}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-gray-700 mb-1'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full p-2 bg-gray-100 rounded-3xl'
                                    required
                                    aria-label="Email"
                                />
                            </div>
                            <button className='btn w-[80%] mx-auto bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full hover:bg-white hover:text-orange transition-all duration-300 uppercase'>
                                Request a call back
                            </button>
                        </form>
                    </div>
                    <div className='flex justify-center py-12'>
                        <Link href='/#home'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <HiOutlineChevronDoubleUp
                                    className='text-[#5651e5]'
                                    size={30}
                                />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='lg:w-1/2 flex items-center justify-center'>
                    <div className='bg-gray-200 p-10 rounded-lg flex flex-col items-center'>
                        <p className='text-center text-lg'>Scan QR Code</p>
                        <QRCode value={`${formData.name}, ${formData.phone}, ${formData.email}`} size={128} className='mt-4' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
