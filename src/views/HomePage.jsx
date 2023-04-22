import React from 'react';
import Header from './components/Header';
import NavButtons from './components/NavButtons'
import Footer from './components/Footer';

function HomePage() {
    return (
        <>
            <Header />
            <NavButtons />
            <main>
                <br />

                <h1>
                    Create your own to do list
                </h1>

                <p>
                    Simply click on the My to do list page to get started!
                </p>

                <br />
                <br /> 

                <div className="tasks">
                <div className="card flex flex-col items-center">
                    Make Organization Easy!
                    <img src="Organization.png" className="index-img" />
                </div>


                <div className="card flex flex-col items-center">
                    Add them Daily, Weekly, and Monthly!
                    <img src="Monthly.png" className="index-img" />
                </div>

                <div className="card flex flex-col items-center">
                    And its free!
                    <img src="free.png" className="index-img" />
                </div>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default HomePage;
