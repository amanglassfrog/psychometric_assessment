"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { FaCheckCircle } from 'react-icons/fa';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isThankYouOpen, setIsThankYouOpen] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        mobile: '',
        email: '',
        role: '',
        description: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        mobile: '',
        email: '',
        role: '',
        description: ''
    });

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeThankYou = () => {
        setIsThankYouOpen(false);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        if (!formValues.name) {
            errors.name = 'Name is required';
        }
        if (!formValues.mobile) {
            errors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formValues.mobile)) {
            errors.mobile = 'Mobile number must be 10 digits';
        }
        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formValues.role) {
            errors.role = 'Current role is required';
        }
        if (!formValues.description) {
            errors.description = 'Description is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post('https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail', formValues);
                setIsThankYouOpen(true);

                console.log('Form submitted:', response.data);
                closeModal();
            } catch (error) {
                console.error('There was an error submitting the form!', error);
            }
        }
    };
    return (
        <>
            <div className='promo '><h5 className='text-white text-center pt-5 pb-5'><b>The AI-Powered Talent Assessment Tool – Get your psychometric report!</b></h5></div>
            <header className="fixed w-full bg-white shadow-md header pt-3 pb-3">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-bold text-black hover:text-black">
                                <Image src="/logo.svg" height={200} width={200} />
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <nav className="flex space-x-4 items-center gap-8">

                                    <button
                                        onClick={openModal}
                                        className="hidden md:inline-flex items-center px-3 py-2 ml-4 border border-transparent roundedcustom shadow-sm text-sm font-medium bad"
                                    >
                                        Book a demo
                                    </button>
                                    {isModalOpen && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                                <div className="flex justify-end">
                                                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                                        &times;
                                                    </button>
                                                </div>
                                                <Image src="/logo.svg" height={200} width={200} />

                                                <h2 className="text-xl font-bold mb-4">Book a Demo</h2>
                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formValues.name}
                                                            onChange={handleChange}
                                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required
                                                        />
                                                        {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                                        <input
                                                            type="tel"
                                                            name="mobile"
                                                            value={formValues.mobile}
                                                            onChange={handleChange}
                                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required
                                                        />
                                                        {formErrors.mobile && <p className="text-red-500 text-xs mt-1">{formErrors.mobile}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Email ID</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formValues.email}
                                                            onChange={handleChange}
                                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required
                                                        />
                                                        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Current Role</label>
                                                        <input
                                                            type="text"
                                                            name="role"
                                                            value={formValues.role}
                                                            onChange={handleChange}
                                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required
                                                        />
                                                        {formErrors.role && <p className="text-red-500 text-xs mt-1">{formErrors.role}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                                        <textarea
                                                            name="description"
                                                            value={formValues.description}
                                                            onChange={handleChange}
                                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required
                                                        ></textarea>
                                                        {formErrors.description && <p className="text-red-500 text-xs mt-1">{formErrors.description}</p>}
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <button
                                                            type="submit"
                                                            className="px-4 py-2 bad "
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    )}
                                    {isThankYouOpen && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                                                <div className="flex justify-center">
                                                    <FaCheckCircle className="text-green-500 w-12 h-12" />
                                                </div>
                                                <h2 className="text-xl font-bold mb-4 text-center">Thank You!</h2>
                                                <p className="text-gray-700 text-center mb-4">Thanks for submitting your details. Please check your email for the psychometric test within the next 48 hours.</p>
                                                <button onClick={closeThankYou} className="block mx-auto px-4 py-2 bad">Close</button>
                                            </div>
                                        </div>
                                    )}
                                </nav>
                            </div>
                            <div className="md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="text-white hover:text-white focus:outline-none"
                                >
                                    <svg
                                        className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        ></path>
                                    </svg>
                                    <svg
                                        className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 items-center">

                        <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-black bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                            Book a demo                        </button>
                    </nav>
                </div>
            </header>
            <section class="bg-white  min-h-[91vh] flex items-center">
                <div class="grid max-w-screen-xl px-4  py-32 md:py-16 sm:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">AI powered psychometric
                            assessment platform</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">Try a free practice psychometric test from the 16 available types to help you prepare for your aptitude tests. Each test is crafted by accredited industry experts to simulate real exams used by top employers.</p>
                        <a onClick={openModal} href="#" class="bad inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  ">
                            Book a demo                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        {isModalOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                    <div className="flex justify-end">
                                        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                            &times;
                                        </button>
                                    </div>
                                    <Image src="/logo.svg" height={200} width={200} />

                                    <h2 className="text-xl font-bold mb-4">Book a Demo</h2>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formValues.name}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                value={formValues.mobile}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                            {formErrors.mobile && <p className="text-red-500 text-xs mt-1">{formErrors.mobile}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Email ID</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formValues.email}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Current Role</label>
                                            <input
                                                type="text"
                                                name="role"
                                                value={formValues.role}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                            {formErrors.role && <p className="text-red-500 text-xs mt-1">{formErrors.role}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Description</label>
                                            <textarea
                                                name="description"
                                                value={formValues.description}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            ></textarea>
                                            {formErrors.description && <p className="text-red-500 text-xs mt-1">{formErrors.description}</p>}
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bad"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {isThankYouOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                                    <div className="flex justify-center">
                                        <FaCheckCircle className="text-green-500 w-12 h-12" />
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 text-center">Thank You!</h2>
                                    <p className="text-gray-700 text-center mb-4">Thanks for submitting your details. Please check your email for the psychometric test within the next 48 hours.</p>
                                    <button onClick={closeThankYou} className="block mx-auto px-4 py-2 bad">Close</button>
                                </div>
                            </div>
                        )}
                        <a onClick={openModal} href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  ">
                            Try for free                        </a>
                        {isModalOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                    <div className="flex justify-end">
                                        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                            &times;
                                        </button>
                                    </div>
                                    <Image src="/logo.svg" height={200} width={200} />

                                    <h2 className="text-xl font-bold mb-4">Book a Demo</h2>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formValues.name}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                value={formValues.mobile}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                            {formErrors.mobile && <p className="text-red-500 text-xs mt-1">{formErrors.mobile}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Email ID</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formValues.email}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Current Role</label>
                                            <input
                                                type="text"
                                                name="role"
                                                value={formValues.role}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            />
                                            {formErrors.role && <p className="text-red-500 text-xs mt-1">{formErrors.role}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Description</label>
                                            <textarea
                                                name="description"
                                                value={formValues.description}
                                                onChange={handleChange}
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            ></textarea>
                                            {formErrors.description && <p className="text-red-500 text-xs mt-1">{formErrors.description}</p>}
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bad"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {isThankYouOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                                    <div className="flex justify-center">
                                        <FaCheckCircle className="text-green-500 w-12 h-12" />
                                    </div>
                                    <h2 className="text-xl font-bold mb-4 text-center">Thank You!</h2>
                                    <p className="text-gray-700 text-center mb-4">Thanks for submitting your details. Please check your email for the psychometric test within the next 48 hours.</p>
                                    <button onClick={closeThankYou} className="block mx-auto px-4 py-2 bad">Close</button>
                                </div>
                            </div>
                        )}
                        <div className='pt-5 flex gap-2'>
                            <span className='flex items-center gap-2 line'><svg className='icon1' viewBox="0 0 576 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path></svg><b>No credit card required</b></span>
                            <span className='flex items-center gap-2'><svg className='icon2' viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg><b>GDPR Compliant</b></span>

                        </div>
                    </div>
                    <div class=" lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="/hero.png" alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
