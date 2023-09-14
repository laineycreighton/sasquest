import React from "react";
import { Link } from 'react-router-dom';
import sasquatch from '../assets/images/sasquatch.png';
import '../assets/css/About.css';
import AnimatedCursor from "react-animated-cursor"; 

const About = () => {
  return (
    <div>
      <AnimatedCursor />
      <div className='about-page'>
        {/* Header */}
        <div className='full-header'>
          <div className='login-header'>
            <nav className='redirect-back'>
              <Link to="/" className='back'>Back</Link>
            </nav>
            <section className='sasquest'>
              <div className='lg-letters'>
                <h1>S</h1>
              </div>
              <div className='logo-middle'>
                <h2>ASQUES</h2>
                <p className='tagline'>
                  tame your beast
                </p>
              </div>
              <div className='lg-letters'>
                <h1>T</h1>
              </div>
            </section>
          </div>
        </div >

        {/* Article */}
        <article className="about-article">
          <div className='align-article'>
            <div className='about-mascot'>
              <img src={sasquatch} alt='sasquatch' />
            </div>
            <div>
              <p>
                Embracing the challenge of a project is like taming a beast! For a
                software developer, curating an engaging portfolio is the secret to
                capturing the attention of potential employers. But let's admit it,
                embarking on a project beyond the confines of a structured environment
                can feel like stepping into the unknown.
              </p>
              <p>
                Fear not, Sasquest will be
                your trusty companion on this exhilarating journey! With Sasquest by
                your side, the intricate process of orchestrating solo projects
                transforms into a thrilling adventure. It's your ultimate toolkit for
                sculpting the blueprint of your ideas into reality. As you wield
                Sasquest's powers to structure and finesse your creations, you’ll
                ascend the ladder of your developer career, one milestone at a time.
              </p>
            </div>
          </div>
        </article>
      </div >
    </div>
  );
};

export default About;
