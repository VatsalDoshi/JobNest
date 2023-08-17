import mainAnimation from '../assets/images/office.json'; // Import the animation data

import React, { useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/LandingPage';
import lottie from 'lottie-web';

const Landing = () => {
  const { user } = useAppContext();
  const container = useRef(null);

  useEffect(() => {
    // Load the animation using Lottie
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: mainAnimation // Pass the animation data here
    });

    // Clean up the animation on unmount
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              “Stay on top of your job search with JobNest: The ultimate Job Application Management Tool”. JobNest is a web application that helps job seekers find suitable job opportunities and to keep a track of it.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>

          {/* Container for the animation */}
          <div ref={container} className='animation-container'></div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
