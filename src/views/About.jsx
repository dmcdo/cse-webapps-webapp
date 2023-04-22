import React from 'react';
import Header from './components/Header';
import NavButtons from './components/NavButtons'
import Footer from './components/Footer';

class About extends React.Component {
    render() {
        return <>
            <Header />
            <NavButtons />

            <main>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="mb-4">We are a team of passionate developers who came together to build this website. Our goal is to provide a platform that makes it easy for people to organize their work and finish jobs easily.</p>
                    <p className="mb-4">Our team includes:</p>
                    <ul className="list-disc list-inside mb-4">
                    <li>Yousef Alanazi - Lead Developer</li>
                    <li>Dylan McDougall - UX Designer</li>
                    <li>Kiran Chandra - Frontend Developer</li>
                    </ul>
                    <p>Thank you for visiting our website. We hope you find it useful and enjoyable to use.</p>
                </div>
            </main>

            <Footer />
        </>
    }
}

export default About;
